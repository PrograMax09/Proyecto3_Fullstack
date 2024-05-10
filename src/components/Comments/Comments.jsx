import React from 'react'
import "./Comments.css"
import { format } from 'date-fns'

const Comments = ({comentario, mine}) => {
    const formattedDate = format(comentario.createdAt, 'dd/MM/yyyy')
    const formattedHour = format(comentario.createdAt, 'HH:mm')
    console.log(comentario)
  return (
    <div className={`comment ${mine ? 'myComment' : 'otherComment'}`}> 
        <p id="username">{comentario.user.username}</p>
        <p>{comentario.content}</p>
        <p id="date">{formattedHour} {" - "} {formattedDate}</p>
    </div>
  )
}

export default Comments

// conditional classname ? comment
// Formato raro -> package date-fns
