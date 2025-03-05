import { useDispatch } from "react-redux"
import options from "../utils/Tmdb"
import { addmovies, addtotalmovies } from "../utils/MovieSlice"
import { useEffect } from "react"
const useNowPlaying=()=>
{
    const dispatch=useDispatch()
    const nowplaying=async ()=>
        {
            const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=tel-IN&page=1', options)
            const data1=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',options)
            const data2=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',options)
            const data3=await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
            const rdata=await data.json()
            const rdata1=await data1.json()
            const rdata2=await data2.json()
            const rdata3=await data3.json()
            const maxIndex = Math.min(50, rdata.results.length);
            const randomIndex = Math.floor(Math.random() * maxIndex);
            const mainmovie=rdata.results[randomIndex]
            dispatch(addmovies(mainmovie))
            dispatch(addtotalmovies({now_playing:rdata.results, top_rated:rdata1.results, popular:rdata2.results, upcoming:rdata3.results}))
        }
    useEffect(()=>
    {
        nowplaying();
    },[]);
    return null;
}
export default useNowPlaying