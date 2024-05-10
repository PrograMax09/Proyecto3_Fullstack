import React, { useState } from 'react'
import "./MessageInput.css"
import { createNewComment, getAllCommentsFromForum } from '../../services/forum'

const MessageInput = ({forumId, setComments}) => {
    const [comment, setComment] = useState()
    function handleChange(event) {
        setComment(event.target.value)
    }
    async function handleSubmit(event) {
        event.preventDefault()
        let result = await createNewComment(forumId, comment)
        console.log(result)
        /*setComments(oldComments => [...oldComments, result])*/
        let fetchedComments = await getAllCommentsFromForum(forumId)
        setComments(fetchedComments)
        setComment("")
    }
  return (
    <form onSubmit={handleSubmit}>
        <textarea id="comment-text" placeholder='Your text here...' onChange={handleChange}/>
        <button type='submit' id='input-button'>Send</button>
    </form>
  )
}

export default MessageInput