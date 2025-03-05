import { useDispatch } from "react-redux"
import { useSelector } from "react-redux";
import {addmovietrailerid} from "../utils/MovieSlice";
import { useEffect } from "react";
import options from "../utils/Tmdb";
const useMoviefetch=(movieid)=>
{
    const dispatch=useDispatch();
    const movies=async()=>
        {
            const moviesdata=await fetch(`https://api.themoviedb.org/3/movie/${movieid}/videos?language=en-IN`, options)
            const data=await moviesdata.json()
            const rdata=data.results.filter((ele)=>ele.type==="Trailer")
            const fdata=rdata ? rdata[0] : data[0]
            dispatch(addmovietrailerid(fdata))       
        }
    useEffect(()=>
    {
        movies();
    },[])
}
export default useMoviefetch