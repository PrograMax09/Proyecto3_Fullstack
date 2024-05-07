import React from 'react'
import "./Edit_profile.css"

export const Edit = () => {
  return (
    <div className='spaceb'>
        <h1 className='centre' >Edit profile</h1>
        <br /><br /><br /><br />
        <div className='spaceb content' >
          <div id='main'>
            <label className="inline" htmlFor="Username">Username:</label><br />
            <input className="inline" id="Username" type="text" placeholder="Username" /><br /><br />
            <label className="inline" htmlFor="Email">Email:</label><br />
            <input className="inline" id="Email" type="email" placeholder="Email" /><br /><br />
          </div>
          <div id="description">
            <label className="inline" htmlFor="Description">Description:</label><br />
            <input className="inline"id="Description" type="text" placeholder="Description" /><br /><br />
            <label className="inline" htmlFor="Neurodivergent_trait">Neurodivergent trait:</label><br />
            <input className="inline" id="Neurodivergent_trait" type="text" placeholder="Neurodivergent trait" /><br /><br />
            <label className="inline" htmlFor="Gender">Gender:</label><br />
            <input className="inline" id="Gender" type="text" placeholder="Gender" /><br /><br />
          </div>
        </div>
    </div>
  )
}

export default Edit