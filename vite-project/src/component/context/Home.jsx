import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

let a = 4;
const Home = () => {
  return (
    <>
    <div>
      <NavLink to="/"><li>HOME</li></NavLink>
      <NavLink to="/About"><li>About</li></NavLink>
      <NavLink to="/Portfoliyo"><li>Portfoliyo</li></NavLink>
    </div>
   { (a==5)? <Outlet/> : "somthing went wrong"}
    </>
  )
}

export default Home
