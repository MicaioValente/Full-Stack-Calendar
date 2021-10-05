import React from "react"
import {Header, Previous, Current, Next }from './componentsStyles'

export default function CalendarHeader({value, setValue}) {
    function currMonthName() {
        return value.format("MMMM")
    }


    function currYear() {
        return value.format("YYYY")
    }


    function prevMonth() {
        return value.clone().subtract(1, "month")
    }

    function nextMonth() {
        return value.clone().add(1, "month")
    }

    function thisMouth() {
        return value.isSame(new Date(), "month")
    }
    return(
        <Header>
            <Previous
            onClick={() => !thisMouth() && setValue(prevMonth())}
            >{!thisMouth() ? String.fromCharCode(171) : ""}</Previous>
            <Current>
                {currMonthName()} {currYear()}
            </Current>
            <Next
            onClick={() => setValue(nextMonth())}
            >{String.fromCharCode(187)}</Next>
        </Header>
    )
    
}
