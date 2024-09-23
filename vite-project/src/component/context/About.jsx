import React from 'react'
import {useNavigate} from 'react-router-dom'
const About = () => {
  const navigate = useNavigate()
  function navigation(){
    navigate("/portfoliyo")
  }
  return (
    <div>
    <form onSubmit={navigation} >
      <input type="text" />
      <input type="text" />
      <button type='submit' >sibmit</button>
    </form>
  </div>
  )
}

export default About
