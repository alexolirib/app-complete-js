import React from 'react'
import App from './App'
import Task from './components/Task/Task'
import About from './components/About/About'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

const Router = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path='/task' component={App} exact={true} />
                <Route path='/about' component={About} />
                <Redirect from='*' to='/task' />
            </Switch>
        </div>
    </BrowserRouter>
)


export default Router