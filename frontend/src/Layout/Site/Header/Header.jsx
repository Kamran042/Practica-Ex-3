import React from 'react'
import "./Header.scss"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="siteHeader">
      <div className="siteHeader__left">
        <img src="https://preview.colorlib.com/theme/course/images/logo.png.webp" alt="" />
        <span>COURSE</span>
      </div>
      <div className="siteHeader__center">
        <ul className='header__nav'>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <a href="/">ABOUT US</a>
          </li>
          <li>
            <a href="/">COURSES</a>
          </li>
          <li>
            <a href="/"> ELEMENTS</a>
          </li>
          <li>
            <Link to="/wishlist">WISHLIST</Link>
          </li>
          <li>
            <Link to="/basket">BASKET</Link>
          </li>
        </ul>
      </div>
      <div className="siteHeader__right">
        <img src="https://preview.colorlib.com/theme/course/images/phone-call.svg" alt="" />
        <p>+43 4566 7788 2457</p>
      </div>
    </div>
  )
}

export default Header
