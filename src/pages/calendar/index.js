import React, { useState } from 'react'
import moment from 'moment'
import CalendarComponent from '../../components/calendar'
import { Wrapper } from './styles'
export default function Calendar() {
    const [value, setValue] = useState(moment())

    return (<Wrapper>

        <CalendarComponent value={value} onChange={setValue} />
    </Wrapper>
    )
}

