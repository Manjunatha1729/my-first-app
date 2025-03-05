import options from "../utils/Tmdb"
const Videotitle=({title,overview})=>
{
    return(
        <div className="pl-16 pt-56 h-full w-[50%] absolute bg-gradient-to-r from-black">
                <p className="text-white text-5xl font-bold">{title}</p><br></br>
                <p>{overview}</p>
                <br></br>
                <button className="bg-neutral-500 mr-9 w-28 py-3 rounded-lg mb-12">Play Now</button>
                <button className="bg-neutral-500 w-28 py-3 rounded-lg mb-12">More Info</button>
        </div>
    )
}
export default Videotitle