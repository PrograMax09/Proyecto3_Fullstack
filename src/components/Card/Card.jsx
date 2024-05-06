import React from 'react'
import './Card.css'

export const Card = ({forum, onClick}) => {
  return (
    <div  className='card-item'>
        <p id='title'>Title</p>
        <div className='card-img'>
            <p id='description'>Description</p>
        </div>
    </div>
  )
}