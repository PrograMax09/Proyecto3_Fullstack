import React, { useEffect } from 'react'
import './Home.css'
import { Card } from '../../components/Card/Card'
import { getAllForums } from '../../services/forum'

const Home = () => {
  useEffect(() => {
    async function fetchAllForums() {
      var forums = await getAllForums()
      console.log(forums)
    }
    fetchAllForums()
  }, [])
  return (
    <>
      <div>Home</div>
      <div id='container' >
        <div id='forumsContainer'>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </>
  )
}

export default Home
