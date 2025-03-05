import React from 'react'
import { onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from "../utils/Firebase"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { logo } from '../utils/images';
const Header = () => {
  const navigate=useNavigate()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        navigate("/browse")
        // ...
      } else {
        // User is signed out
        navigate("/")
        // ...
      }
    });
    const handleSignOut=()=>
    {
      signOut(auth).then(() => {
        navigate("/")
        
      }).catch((error) => {
      });
      
    }
    const user=useSelector((store)=>store.user)
  return (
    <div className='w-screen flex justify-between bg-gradient-to-b from-black to-transparent absolute'>
      <div className='relative z-10'>
        <img className='w-52 ml-14 h-20' src={logo} />
      </div>
      {user && (
        <div className='inline-flex h-16 z-50'> 
        <img className='rounded-[50%] w-10 h-10 mt-5 mr-5' src="https://envs.sh/rJd.jpg" alt="userprofile" />
        <button className='font-bold mt-5 mr-3 text-lg bg-red-600 rounded p-1 pb-1' onClick={handleSignOut}>Log Out</button>
      </div>
     )}
    </div>
  )
}

export default Header
