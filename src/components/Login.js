import { useRef, useState } from "react"
import Header from "./Header";
import Validation from "../utils/Validation";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import {auth} from "../utils/Firebase"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/UserSlice";
const Login=()=>
{
  const [result,setresult]=useState(false)
  const [validcheck,setvalidcheck]=useState(null)
  const navigate=useNavigate();
  const email=useRef(null)
  const password=useRef(null)
  const name=useRef(null);
  const dispatch=useDispatch()
  function newuser()
  {
    setresult(!result)
  };
  const validateuser=()=>
  {
    const valresult=Validation(email.current.value,password.current.value)
    setvalidcheck(valresult)
    if(valresult)
    {
      if(result){
        //sign-up
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            updateProfile(user, {
              displayName:name.current.value,  
              photoURL: "https://avatars.githubusercontent.com/u/12824231?v=4",
            }).then(() => {
              const {photoURL,displayName,email}=auth.currentUser
              dispatch(addUser({photo:photoURL,name:displayName,email:email}))
             
              
            }).catch((error) => {
              // An error occurred
              console.log("eoror");
              
              // ...
            });
            navigate("/load")
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setvalidcheck("email already exist please sign in")
            // ..
          });
      }
      else
      {
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            navigate("/load")          
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setvalidcheck("invalid mail or password")
          });
      }
    }
      
  }
  
  return(
  <div>
    <Header />
    <div>
    <img className='absolute mt-[-80px] brightness-50' src='https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_large.jpg' alt="background-img"/>
    </div>
    <div className="rounded w-4/12 h-auto p-5 text-white bg-black bg-opacity-65 mx-auto text-center mt-10 relative">
      <p className="font-bold text-2xl text-left pl-8 pt-2 pb-3">{result ? "Sign Up" : "Sign In"}</p>
      <form className="block" onSubmit={(e)=>e.preventDefault()}>
      {result && <div><input ref={name} className="mt-5 mb-3 bg-transparent border-[1px] p-3 w-10/12 rounded-md" type="text" placeholder="Enter your name" />
        <input className=" bg-transparent border-[1px] p-3 w-10/12 rounded-md" type="text" placeholder="Enter mobile number" /></div>}  
      <input ref={email} className="my-3 bg-transparent border-[1px] p-3 w-10/12 rounded-md " aria-label="email" placeholder="example@gmail.com" />
      <input ref={password} className=" bg-transparent border-[1px] p-3 w-10/12 rounded-md" type="password" placeholder="password"/><br />
      {result && <div><input type="password" className="my-3  bg-transparent border-[1px] p-3 w-10/12 rounded-md" placeholder="confirm password"/><br /></div>}
      <p className="text-left ml-8 pt-3 text-[14px] font-semibold text-red-600">{validcheck}</p>
      {!result && <div className="flex h-6 mt-5 pb-3 ml-6 mb-3"><input className="w-9 h-5" type="checkbox"></input><p className="mt-[-3px] text-[16px] font-semibold">Remember me</p><br /></div> }
      <input className="my-3 cursor-pointer w-10/12 text-white p-3 bg-red-600" type="submit" onClick={validateuser} value={result ? "Sign Up" : "Sign In"} />
      {result ? <p>Already have account<button className="text-yellow-500 pl-1 hover:underline" onClick={newuser}>Sign In</button></p>:<p>New User <button className="text-yellow-500 pl-1" onClick={newuser}>Sign Up</button></p>}
      </form>
    </div>
    </div>
  )
}
export default Login