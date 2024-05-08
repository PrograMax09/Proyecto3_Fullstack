import React, { useEffect, useState } from 'react'
import './Home.css'
import { Card } from '../../components/Card/Card'
import { getAllForums } from '../../services/forum'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const [forums, setForums] = useState([])

  useEffect(() => {
    async function fetchAllForums() {
      let fetchedForums = await getAllForums()
      setForums(fetchedForums)
    }
    fetchAllForums()
  }, [])

  function handleClick(forumId) {
    console.log("Click")
    navigate(`/forum/${forumId}`)
  }
  return (
    <>
      <div>Home</div>
      <div id='container' >
        <div id='forumsContainer'>
          {
            forums.length > 0 && forums.map((forum) => {
              return <Card forum={forum} key={forum.id} onClick={() => handleClick(forum.id)}/>
            })
          }
        </div>
      </div>
    </>
  )
}

export default Home
