import React from 'react'
import Header from '../../Layout/Admin/Header/Header'
import Footer from '../../Layout/Admin/Footer/Footer'
import {Outlet} from "react-router-dom"

const AdminRoutes = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default AdminRoutes
