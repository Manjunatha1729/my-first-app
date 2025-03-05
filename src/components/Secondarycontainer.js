import { useSelector } from "react-redux"
import MoviePoster from "./MoviePoster";
const Secondarycontainer=()=>
{
    const now_playing=useSelector((store)=>store.movies?.totalmovies?.now_playing)
    const popular=useSelector((store)=>store.movies?.totalmovies?.popular)
    const upcoming=useSelector((store)=>store.movies?.totalmovies?.upcoming)
    const top_rated=useSelector((store)=>store.movies?.totalmovies?.top_rated)  
    if(!now_playing) return <div className="text-red-600">fetching problem</div>  
    return(
    <div className="relative mt-[47%] z-50 text-red-600 w-screen">
        <div>
        <div className="text-white text-3xl ml-5 font-bold pb-5">
                Trending
            </div>
        <div className="flex space-x-4 overflow-x-scroll ml-5 no-scrollbar">
        {now_playing.map((movie)=>
        <div>
            <MoviePoster poster_path={movie.poster_path} movie_name={movie.original_title} />
        </div>)}
        </div>
        </div>
        <div>
        <div className="text-white text-3xl font-bold ml-5 pb-5">
                Popular
            </div>
        <div className="flex space-x-4 overflow-x-scroll ml-5 no-scrollbar">
        {popular.map((movie)=>
        <div>
            <MoviePoster poster_path={movie.poster_path} movie_name={movie.original_title} />
        </div>)}
        </div>
        </div>


        <div>
        <div className="text-white text-3xl font-bold ml-5 pb-5">
               Upcoming
            </div>
        <div className="flex space-x-4 overflow-x-scroll ml-5 no-scrollbar">
        {upcoming.map((movie)=>
        <div>
            <MoviePoster poster_path={movie.poster_path} movie_name={movie.original_title} />
        </div>)}
        </div>
        </div>


        <div>
        <div className="text-white text-3xl font-bold ml-5 pb-5">
               Top Rated
            </div>
        <div className="flex space-x-4 overflow-x-scroll ml-5 no-scrollbar">
        {top_rated.map((movie)=>
        <div>
            <MoviePoster poster_path={movie.poster_path} movie_name={movie.original_title} />
        </div>)}
        </div>
        </div>
    </div>)
}
export default Secondarycontainer