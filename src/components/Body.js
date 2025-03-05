import React from 'react'
import Login from './Login'
import Header from './Header'
import Error from './Error'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Browse from './Browse'
import {onAuthStateChanged } from "firebase/auth";
import LoadingScreen from '../utils/Loading'
import {auth} from "../utils/Firebase"
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/UserSlice'
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
    ,
    {
      path:"/load",
      element:<LoadingScreen />,
    }
  ]);
  return(<RouterProvider router={appRouter}/>)
}
export default Body