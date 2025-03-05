import {useSelector } from "react-redux"
import useMoviefetch from "../hooks/usemoviefetch"
const VideoPlay=({movieid})=>
{
    useMoviefetch(movieid);
    const playmovie=useSelector((store)=>store.movies?.movietrailer);
    return(
        <div className="absolute ">
            <iframe className="-z-20 w-screen aspect-video" src={`https://www.youtube.com/embed/${playmovie?.key}?autoplay=0&modestbranding=1&rel=0&controls=0&mute=1`}  frameborder="0" allow="autoplay;" allowfullscreen></iframe>
        </div>
    )
}
export default VideoPlay