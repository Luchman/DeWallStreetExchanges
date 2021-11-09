import React from 'react'
import logo from '../assets/logo1.png'
import  '../styles/splash.modules.css'


function Splash() {
    return (
        <div className="splash">
            <img className="logo" src={logo} alt="logo"/>
        </div>
    )
}

export default Splash
