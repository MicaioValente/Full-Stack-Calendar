import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/home'
import Calendar from './pages/calendar'




export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/calendar' component={Calendar}/>
            </Switch>
        
        </BrowserRouter>
    )
}