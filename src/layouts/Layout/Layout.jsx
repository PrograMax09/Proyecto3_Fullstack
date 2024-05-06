import React from 'react'
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import './Layout.css'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <Header/>
        <div id='outlet'>
          <Outlet/>
        </div>
        <Footer/>
    </>
  )
}

export default Layout