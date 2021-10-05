import React, {useState, useEffect} from 'react'
import './componentsStyles.js'
import {
    Calendar, 
    Day, 
    Body, 
    DayNames, 
    Week} from './componentsStyles'
import buildCalendar from './build'
import dayStyles, {beforeToday} from './styles'
import Header from './header'



export default function CalendarComponent({value, onChange}){
    const [calendar, setCalendar] = useState([])
    useEffect(() => {
        setCalendar(buildCalendar(value))
    }, [value])
    

    


    return(
       <Calendar>
        <Header value={value} setValue={onChange}/>
          <Body>
              <DayNames>
                  {
                      ["S", "M", "T", "W", "T", "F", "S"].map(week =>
                      <Week>
                          {week}
                      </Week>)
                  }
              </DayNames>
            {calendar.map((week)=> (
                 <div className='line'>
                     {week.map((day)=> (
                         <Day
                          onClick={() => !beforeToday(day) && onChange(day)}>
                          <div
                              className={dayStyles(day, value)}
                          ><a href="/deu-certo">{day.format("D").toString()}</a></div>
                          </Day>
                     ))}
                 </div>

             ))}
          </Body>
       </Calendar>
    )
}




