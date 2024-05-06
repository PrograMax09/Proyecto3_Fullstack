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
        <label htmlFor="Neurodivergent_trait">Neurodivergent trait:</label><br />
        <input id="Neurodivergent_trait" type="text" placeholder="Neurodivergent trait" /><br /><br />
        <label htmlFor="Gender">Gender:</label><br />
        <input id="Gender" type="text" placeholder="Gender" /><br /><br />
      </div>
    </div>
  )
}

export default Signup