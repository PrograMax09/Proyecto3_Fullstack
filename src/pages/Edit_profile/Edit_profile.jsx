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
            <label className="inline" htmlFor="trait">Choose a trait:</label>
            <select className="inline" name="trait" id="trait">
                <option value="autism">Autism</option>
                <option value="adhd">ADHD</option>
                <option value="dyslexia">Dyslexia</option>
                <option value="dyscalculia">Dyscalculia</option>
                <option value="epilepsy">Epilepsy</option>
                <option value="dysprexia">Dysprexia</option>
                <option value="down_syndrome">Down Syndrome</option>
                <option value="tourette_syndrome">Tourette Syndrome</option>
                <option value="bipolar_disorder">Bipolar Disorder</option>
                <option value="Other">Other</option>
            </select><br /><br />
            <label className="inline" htmlFor="Gender">Gender:</label><br />
            <input className="inline" id="Gender" type="text" placeholder="Gender" /><br /><br />
          </div>
        </div>
    </div>
  )
}

export default Edit