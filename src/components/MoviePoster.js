const MoviePoster=(props)=>
{  
    return(
        <div>
            <div className="relative w-44 cursor-pointer group min-h-72">
            <img className="absolute rounded" src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`}></img>
            <div className="absolute inset-0 flex flex-col justify-end items-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2">
                <p className="text-white font-bold mb-2 text-center">{props.movie_name}</p>
                <div className="flex gap-2">
                    <button className="bg-red-500 px-4 py-2 text-white font-semibold rounded">Play</button>
                    <button className="bg-red-500 px-4 py-2 text-white font-semibold rounded">Save</button>
                </div>
            </div>
            </div>
        </div>
    )
}
export default MoviePoster