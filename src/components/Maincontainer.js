import { useSelector } from "react-redux";
import VideoPlay from "./Videoplay";
import Videotitle from "./Videotitle";

const Maincontainer = () => {
    const movie = useSelector((store) => store.movies?.nowplayingmovie);

    // Show a loading state while waiting for movies
    if (!movie || movie.length === 0) return
    const {original_title,overview,id}=movie
    return (
        <div className="absolute w-screen text-white aspect-video bg-gradient-to-r from-black">
            <VideoPlay movieid={id} />
            <Videotitle title={original_title} overview={overview} />
        </div>
    );
};

export default Maincontainer;
