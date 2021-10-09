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
    Week
} from './componentsStyles'
import buildCalendar from './build'
import dayStyles, { beforeToday } from './styles'
import Header from './header'
import axios from "axios"
export default function CalendarComponent({ value, onChange }) {
    const [modalOpen, setModalOpen] = useState(false)
    const newEvent = {
        date: "",
        title: "bla la aniversario"
    }
    let bla = newEvent.title
    const [calendar, setCalendar] = useState([])
    const [dayInfo, setDayInfo] = useState([])
    const [evenInfo, setEventInfo] = useState([])
    const [objEvent, setObjEvent] = useState(newEvent)

    useEffect(() => {
        setCalendar(buildCalendar(value))

    }, [value])
    async function addEventTest(day) {
        // console.log("botao")

        // const newEvent = {
        //     date: day.format("YYYYMMDD"),
        //     title: bla
        // }

        // const result = await axios.post("https://micaio.eliti.com.br/api-calendar/save.php", newEvent)
        // console.log(result)
    }
    async function getEvents() {
        console.log("botao")

        const result = await axios.get("https://micaio.eliti.com.br/api-calendar/", newEvent)
        setEventInfo(result.data)


    }

    function changeDay(day) {
        setModalOpen(true)
        setDayInfo(day.format("YYYYMMDD"))
        getEvents()
    }


    function verifyEvent(props) {
        if (props.format("YYYYMMDD") === "20211008") {
            return <p>ndada</p>
        }
    }
    function handleChange(event) {
        console.log(event.target.value)
        const { name, value } = event.target
        setObjEvent((objEvent) => {
            return {
                ...objEvent,
                [name]: value,
            }
        })
    }

    console.log(evenInfo,)
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
                {calendar.map((week) => (
                    <div className='line'>
                        {week.map((day) => (
                            <Day
                                onClick={() => changeDay(day) && !beforeToday(day) && onChange(day)} >
                                <div
                                    className={dayStyles(day, value)}
                                >{day.format("D").toString()}
                                    <div className="hart"></div>
                                </div>
                                <div className="event">{verifyEvent(day)}</div>
                            </Day>
                        ))}
                    </div>
                ))}
            </Body>
        </Calendar >
        <Model show={modalOpen}>
            <ContentModal>
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
                    <BotonSave onClick={() => { getEvents() }}>Salvar</BotonSave>
                </ButtonDiv>
            </ContentModal>
        </Model>

    </>
    )
}
