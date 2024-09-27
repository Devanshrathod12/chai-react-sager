import React from 'react'
import { NavLink } from 'react-router-dom'
const H = () => {
  return (
    <div>
      <NavLink to="/"><li>H</li></NavLink>
      <NavLink to="/A"><li>A</li></NavLink>
      <NavLink to="/P"><li>P</li></NavLink>
      <div>this is Home page</div>
    </div>
  )
}

export default H
