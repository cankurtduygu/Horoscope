import React from 'react'
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul className='navbar__list'>
        <li><a href="#horoscope">HOROSCOPE</a></li>
        <li><a href="#daily">DAILY</a></li>
        <li><a href="#tarot">TAROT</a></li>
        <li><a href="#article">ARTICLE</a></li>
      </ul>
    </div>
  )
}

export default Navbar