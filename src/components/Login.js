import { useRef, useState } from "react"
import Header from "./Header";
import Validation from "../../utils/Validation";
const Login=()=>
{
  const [result,setresult]=useState(false)
  const [validcheck,setvalidcheck]=useState(null)
  const email=useRef(null)
  const password=useRef(null)
  function newuser()
  {
    setresult(!result)
  };
  const validateuser=()=>
  {
    const valresult=Validation(email.current.value,password.current.value)
    setvalidcheck(valresult)
  }
  
  return(
  <div>
    <Header />
    <div>
    <img className='absolute mt-[-80px] brightness-50' src='https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_large.jpg' />
    </div>
    <div className="rounded w-4/12 h-auto p-5 text-white bg-black bg-opacity-65 mx-auto text-center mt-10 relative">
      <p className="font-bold text-2xl text-left pl-8 pt-2 pb-3">{result ? "Sign Up" : "Sign In"}</p>
      <form className="block" onSubmit={(e)=>e.preventDefault()}>
      {result && <div><input className="mt-5 mb-3 bg-transparent border-[1px] p-3 w-10/12 rounded-md" type="text" placeholder="Enter your name" />
        <input className=" bg-transparent border-[1px] p-3 w-10/12 rounded-md" type="text" placeholder="Enter mobile number" /></div>}  
      <input ref={email} className="my-3 bg-transparent border-[1px] p-3 w-10/12 rounded-md " type="email" placeholder="example@gmail.com" />
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