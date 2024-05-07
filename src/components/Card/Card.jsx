import React from 'react'
import './Card.css'

export const Card = ({forum, onClick}) => {
  return (
    <div onClick={onClick} className='card-item'>
        <p id='title'>{forum.topic}</p>
        <div className='card-img'>
            <p id='description'>{forum.description}</p>
        </div>
    </div>
  )
}