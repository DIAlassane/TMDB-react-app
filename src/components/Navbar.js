import React from 'react'
import '../App.css'

function Navbar() {
  return (
    <div className='navbar'>
        <a className='logo' href="/home">NoFlix</a>
        <div className="contact">
            <a href="/">Contact</a>
            <a href="/">Connection</a>
            <a href="/">Inscription</a>
        </div>
    </div>
  )
}

export default Navbar