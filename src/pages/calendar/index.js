import React, {useState}from 'react'
import moment from 'moment'
import CalendarComponent from '../../components/calendar'
import styled from 'styled-components'

export default function Calendar(){
    const [value, setValue] = useState(moment())

    return(<Wrapper>

        <CalendarComponent value={value} onChange={setValue}/>
    </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: linear-gradient(#3D2C8D, #916BBF);

`