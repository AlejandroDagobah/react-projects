import React from 'react'
import logo from '../img/logo.svg'
export default function Navbar(){
    return(
        <nav className='nav'>
            <img src={logo} className="nav-logo"/>
            <h3 className='nav-title'>ReactFacts</h3>
            <h4 className='nav-subtitle'>React Course - Project 1</h4>
            
        </nav>
        
    )
}