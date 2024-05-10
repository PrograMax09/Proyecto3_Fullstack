import React, { useEffect, useState } from 'react'
import { getAllCommentsFromForum } from '../../services/forum'
import { useParams, useLocation } from 'react-router-dom'
import Comments from '../../components/Comments/Comments'
import './Forum.css'
import MessageInput from '../../components/MessageInput/MessageInput'

const Forum = () => {
  const [comments, setComments] = useState([])
  const [user, setUser] = useState('')
  const {forumId} = useParams()
  const {state} = useLocation()



  

  useEffect(() => { 
    setUser(localStorage.getItem('id'))
    async function fetchAllComments() {
      let fetchedComments = await getAllCommentsFromForum(forumId)
      setComments(fetchedComments)
    }
    fetchAllComments()
  }, [])


  return (
    <>
      <p id='titlePage'>{state.forum}</p>
      <div className='forumContainer'>
        
        {
          comments?.length && comments.map( comment => (
            <Comments key={comment.id } comentario={comment} mine={comment.user_id === parseInt(user)}/> 
          ))
        }
        <MessageInput forumId={forumId} setComments={setComments} />
      </div>
    </>
  )
}

export default Forum

