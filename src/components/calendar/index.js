import React, { useState, useEffect } from 'react'
import './componentsStyles.js'
import {
    Calendar,
    Day,
    Body,
    DayNames,
    InputDiv,
    Model,
    ContentModal,
    ButtonDiv,
    BotonClose,
    BotonSave,
    DivEvent,
    EventDiv,
    Week
} from './componentsStyles'
import buildCalendar from './build'
import dayStyles, { beforeToday } from './styles'
import Header from './header'
import axios from "axios"

const newEvent = {
    date: "",
    title: ""
}

export default function CalendarComponent({ value, onChange }) {
    const [modalOpen, setModalOpen] = useState(false)
    const [calendar, setCalendar] = useState([])
    const [dayInfo, setDayInfo] = useState([])
    const [DayModal, setDayModal] = useState()
    const [evenInfo, setEventInfo] = useState([])
    const [objEvent, setObjEvent] = useState(newEvent)

    useEffect(() => {
        setCalendar(buildCalendar(value))

    }, [value])

    useEffect(() => {
        async function getEvents() {
            const result = await axios.get("https://micaio.eliti.com.br/api-calendar/index.php")
            setEventInfo(result.data)

        }
        getEvents()

    }, [])
    async function addEventTest(objEvent) {
        const result = await axios.post("https://micaio.eliti.com.br/api-calendar/save.php", objEvent)
        if (result.data.msg === "success") {
            refreshPage()
        }
    }

    function handleChange(event) {
        const { name, value } = event.target
        setObjEvent((objEvent) => {
            return {
                ...objEvent,
                [name]: value,
                date: dayInfo
            }
        })
    }

    function changeDay(day) {
        setModalOpen(true)
        setDayInfo(day.format("YYYYMMDD"))
        setDayModal(day.format("DD/MM"))

    }

    function refreshPage() {
        window.location.reload();
    }

    return (<>
        <Calendar>
            <Header value={value} setValue={onChange} />
            <Body>
                <DayNames>
                    {
                        ["S", "M", "T", "W", "T", "F", "S"].map(week =>
                            <Week>
                                {week}
                            </Week>)
                    }
                </DayNames>
                {
                    calendar.map((week) => (
                        <div className='line'>
                            {
                                week.map((day) => (
                                    <Day
                                        onClick={() => changeDay(day) && !beforeToday(day) && onChange(day)} >
                                        <div
                                            className={dayStyles(day, value)}
                                        >{day.format("D").toString()}
                                            <div className="hart"></div>
                                        </div>
                                        <EventDiv>{
                                            evenInfo.map((deventDay) => (
                                                deventDay.date === day.format("YYYYMMDD") ?
                                                    <p>{deventDay.title}</p> : ""))}
                                        </EventDiv>
                                    </Day>
                                ))
                            }
                        </div>
                    ))
                }
            </Body>
        </Calendar >
        <Model show={modalOpen}>
            <ContentModal>
                <p>{DayModal}</p>
                <InputDiv>
                    <input type="text" name="title" onChange={handleChange} placeholder="   Add Event!" />
                </InputDiv>
                <DivEvent>
                    {evenInfo.map((titles) => {
                        if (titles.date === dayInfo) {
                            return <p>{titles.title}</p>
                        }
                    })}
                </DivEvent>
                <ButtonDiv>
                    <BotonClose onClick={() => setModalOpen(false)}>Fechar</BotonClose>
                    <BotonSave onClick={() => { addEventTest(objEvent) }}>Salvar</BotonSave>
                </ButtonDiv>
            </ContentModal>
        </Model>
    </>
    )
}
