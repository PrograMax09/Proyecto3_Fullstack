import React, { useEffect, useState } from 'react'
import './Home.css'
import { Card } from '../../components/Card/Card'
import { getAllForums } from '../../services/forum'

const Home = () => {
  const [forums, setForums] = useState([])
  useEffect(() => {
    async function fetchAllForums() {
      let fetchedForums = await getAllForums()
      setForums(fetchedForums)
    }
    fetchAllForums()
  }, [])
  function handleClick() {
    console.log("Click")
  }
  return (
    <>
      <div>Home</div>
      <div id='container' >
        <div id='forumsContainer'>
          {
            forums.length > 0 && forums.map((forum) => {
              return <Card forum={forum} key={forum.id} onClick={handleClick}/>
            })
          }
        </div>
      </div>
    </>
  )
}

export default Home
