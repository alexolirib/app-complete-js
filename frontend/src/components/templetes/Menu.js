import React from 'react'
import { NavLink } from 'react-router-dom'

export default props => (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container'>
            <NavLink className='navbar-brend' to='/task'>
                <i className='fa fa-calendar-check-o'></i>
                Task
            </NavLink>
        </div>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
                <NavLink className="nav-link" to="/task">Task</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/about">about</NavLink>
            </li>
        </ul>
    </nav>
)