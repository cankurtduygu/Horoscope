import React from 'react'
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul className='navbar__list'>
        <li><a href="#">HOROSCOPE</a></li>
        <li><a href="#">DAILY</a></li>
        <li><a href="#">TAROT</a></li>
        <li><a href="#">ARTICLE</a></li>
        <li><a href="#">CONTACT</a></li>
      </ul>
    </div>
  )
}

export default Navbar