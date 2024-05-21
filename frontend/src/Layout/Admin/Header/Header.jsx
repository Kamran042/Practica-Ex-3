import React from 'react'
import "./Header.scss"
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div className='header__admin'>
      <div className="header__admin__left">
        <h2>Logo</h2>
      </div>
      <div className="header__admin__right">
        <Link to="" >Products</Link>
        <Link to="add" >Add Product</Link>
      </div>
    </div>
  )
}

export default Header
