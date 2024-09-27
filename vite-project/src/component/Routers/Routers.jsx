import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
const Routers = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <div>hello world</div>
    },
    {
      path:"/rahul",
      element: <div>hello rahul</div>
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default Routers
