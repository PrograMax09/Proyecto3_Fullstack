import React, { useEffect, useState } from 'react'
import './Home.css'
import { Card } from '../../components/Card/Card'
import { getAllForums } from '../../services/forum'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  //useNavigate is a hook from react router dom.
  const [forums, setForums] = useState([])
  //useState is a hook which allows to put a state variable. It`s inicialized as an empty array.

  useEffect(() => {
    //useEffect is another hook that lets you syncronize the components.
    async function fetchAllForums() {
      //fetchAllForums is a call to the backend to get all the forums.
      let fetchedForums = await getAllForums()
      setForums(fetchedForums)
    }
    fetchAllForums()
  }, [])

  function handleClick(forumId, topic) {
    console.log("Click")
    navigate(`/forum/${forumId}`, {state: {forum: topic}})
  }
  return (
    <>
      <div id='titlePage'>Home</div>
      <div id='container' >
        <div id='forumsContainer'>
          {
            forums.length > 0 && forums.map((forum) => {
              return <Card forum={forum} key={forum.id} onClick={() => handleClick(forum.id, forum.topic)}/>
            })
          }
        </div>
      </div>
    </>
  )
}

export default Home
