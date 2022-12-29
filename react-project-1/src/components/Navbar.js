import React from 'react'
import logo from '../img/logo.svg'

export default function Navbar(props){
    
    return(
        <nav className={props.darkMode ? "dark" : "light"}>
            
            <img src={logo} className="nav--logo_icon"/>
            <h3 className='nav-logo_text'>ReactFacts</h3>
            
            <div className='toggler'>
                <p className="toggler--light">{props.darkMode ? "Dark" : "Light"}</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
            </div>

        </nav>
        
    )
}