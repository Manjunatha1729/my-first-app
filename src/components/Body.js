import React from 'react'
import Login from './Login'
import Header from './Header'
import Error from './Error'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Browse from './Browse'
const Body=()=>
{
  const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<Login />,
      errorElement:<Error />
    },
    {
      path:"/browse",
      element:<Browse />,
    },
  ]);
  return(<RouterProvider router={appRouter}/>)
}
export default Body