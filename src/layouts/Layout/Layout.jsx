import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import './Layout.css'
import { Outlet } from 'react-router-dom'
import SimpleBottomNavigation from '../../components/BottomNavigation/BottomNavigation.jsx'

const Layout = () => {
  var [token, setToken] = useState(localStorage.getItem("token")) 
  /*useEffect(() => {

  }, [localStorage]) */
  return (
    <>
        <Header setToken={setToken} />
        <div id='outlet'>
          <Outlet/>
        </div>
        <Footer/>
    </>
  )
}

export default Layout

/*<div id='bottomNav'>
{ token && <SimpleBottomNavigation/>}
</div>*/