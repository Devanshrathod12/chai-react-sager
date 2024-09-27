import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import H from './H';
  import A from './A';
  import P from './P';
const LinkRout = () => {
    const router = createBrowserRouter([
        {
          path:"/",
          element: <H />
        },
        {
          path:"/A",
          element: <A />
        },
        {
          path:"/P",
          element: <P />
        },
      ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default LinkRout
