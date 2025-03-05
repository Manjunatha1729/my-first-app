// LoadingScreen.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoadingScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/browse");
    }, 2000); 
  }, [navigate]);

  return (
    <div className="absolute inset-0 bg-opacity-80">
      <div>
        <img className='absolute -z-20 brightness-50 mt-[-80px]' src='https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_large.jpg' alt="background-img"/>
        </div>
      <div className="w-12 mt-52 h-12 border-4 border-t-red-500 border-gray-300 rounded-full animate-spin mx-auto">

      </div>
     <div className="ml-96 pl-36 mt-3 text-lg font-bold text-red-500 h-9">
     <p>Processing...</p>
     </div>
    </div>
  );
};

export default LoadingScreen;
