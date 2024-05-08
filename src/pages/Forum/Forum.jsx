import React, { useEffect, useState } from 'react'
import { getAllCommentsFromForum } from '../../services/forum'
import { useParams } from 'react-router-dom'

const Forum = () => {
  const [comments, setComments] = useState([])
  const {forumId} = useParams()
  useEffect(() => { 
    async function fetchAllComments() {
      let fetchedComments = await getAllCommentsFromForum(forumId)
      setComments(fetchedComments)
    }
    fetchAllComments()
  }, [])
  return (
    <div>
      <p>hi!!</p>
    </div>
  )
}

export default Forum