import { useRef, useState } from "react"
import Header from "./Header";
import Validation from "./Validation";
const Login=()=>
{
  const [result,setresult]=useState(false);
  const [validcheck,setvalidcheck]=useState(null)
  const email=useRef(null)
  const password=useRef(null)
  function newuser()
  {
    setresult(!result);
  };
  const validateuser=()=>
  {
    const valresult=Validation(email.current.value,password.current.value)
    setvalidcheck(valresult)
  }
  
  return(
  <div>
    <Header />
    <div className="rounded w-4/12 h-auto p-5 bg-pink-800 mx-auto text-center mt-20 relative">
      <p className="font-bold text-2xl text-center">{result ? "Sign Up" : "Sign In"}</p>
      <form className="block" onSubmit={(e)=>e.preventDefault()}>
      {result && <div><input className="mt-5 mb-3" type="text" placeholder="Enter your name" />
        <input type="text" placeholder="Enter mobile number" /></div>}  
      <input ref={email} className="my-3" type="email" placeholder="example@gmail.com" />
      <input ref={password} type="password" placeholder="password"/><br />
      {result && <div><input type="password" className="my-3" placeholder="confirm password"/><br /></div>}
      <p className="text-left ml-20 text-[14px] font-semibold text-red-600">{validcheck}</p>
      <input className="bg-stone-200 my-3 cursor-pointer" type="submit" onClick={validateuser} value="Submit" />
      {result ? <p>Already have account<button className="text-yellow-500 pl-1" onClick={newuser}>Sign In</button></p>:<p>New User <button className="text-yellow-500 pl-1" onClick={newuser}>Sign Up</button></p>}
      </form>
    </div>
    </div>
  )
}
export default Login