import React from 'react'

const Signup = () => {
  return (
    <div id="flex_container2">
      <div id="container2">
        <h1 className="title" >Signup</h1><br /><br /><br />
        <label htmlFor="Username">Username:</label><br />
        <input id="Username" type="text" placeholder="Username" /><br /><br />
        <label htmlFor="Email">Email:</label><br />
        <input id="Email" type="email" placeholder="Email" /><br /><br />
        <label htmlFor="Password">Password:</label><br />
        <input id="Password" type="password" placeholder="Password" /><br /><br />
        <label htmlFor="Description">Description:</label><br />
        <input id="Description" type="text" placeholder="Description" /><br /><br />
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
        <label htmlFor="Gender">Gender:</label><br />
        <input id="Gender" type="text" placeholder="Gender" /><br /><br />
      </div>
    </div>
  )
}

export default Signup