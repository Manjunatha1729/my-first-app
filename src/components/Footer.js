import { logo } from "../utils/images"
const Footer=()=>
{
    return(
        <div className="h-[800px] pt-4">
            <div className="h-[50%]">
                <div className="bg-red-600 text-left text-white text-2xl absolute w-[60%] h-[14.5%]">
                   <p className="mt-10 w-80 ml-16 font-bold font-serif">Gain Access to unlimited movie TV shows and More</p>
                   <input className="mt-20 ml-10 font-medium p-4 text-xl bg-red-500 text-white placeholder-white outline-none" placeholder="your mail address"></input>
                   <button className="mt-20 ml-3 font-medium text-[16px] px-10 py-3 bg-black text-white">GET STARTED</button>
                </div>
                <div className="bg-gradient-to-tr from-red-600 w-[40%] absolute ml-[60%] h-[14.5%]">
                    
                </div>
                <img className="w-screen object-cover h-[100%]" src="https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_large.jpg"></img>
            </div>


            <div className="second text-white flex bg-blue h-[30%] w-screen pt-20">
                <div className="ml-11 ">
                    <img className="w-48" src={logo}></img>
                    <p className="pl-16 opacity-60">India</p>
                    <select className="ml-6 mt-7 rounded-sm text-white bg-slate-700 px-10 py-3">
                        <option className="text-black">English</option>
                        <option className="text-black">Hindi</option>
                    </select>
                </div>
                <div className="flex ml-[15%] w-[60%] justify-around pt-4">
                <div>
                    <h6 className="font-mono text-gray-500">EXPLORE</h6>
                    <div className="cursor-pointer opacity-90 underline pt-4 flex flex-col gap-3 text-[14px]">
                    <p>Help Center</p>
                    <p>Account</p>
                    <p>Ways to Watch</p>
                    <p>Only on Netflix</p>
                    </div>
                </div>
                <div>
                    <h6 className="font-mono text-gray-500">LEGAL</h6>
                    <div className="cursor-pointer opacity-90 underline pt-4 flex flex-col gap-3 text-[14px]">
                    <p>Cookies Preference</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Use</p>
                    <p>Gift Card Terms</p>
                    <p>Legal Notice</p>
                    <p>Corporate Information</p>
                    </div>
                </div>
                <div>
                    <h6 className="font-mono text-gray-500">SUPPORT</h6>
                    <div className="cursor-pointer opacity-90 underline pt-4 flex flex-col gap-3 text-[14px]">
                    <p>FAQ</p>
                    <p>Speed Test</p>
                    <p>Contact Us</p>
                    <p>Jobs</p>
                    <p>Media Center</p>
                    <p>Investor Relations</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Footer
