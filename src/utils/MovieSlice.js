import { createSlice } from "@reduxjs/toolkit";
const MovieSlice=createSlice(
    {
        name:"Movies",
        initialState:
        {
            nowplayingmovie:null,
            movietrailer:null,
            totalmovies:null
        },
        reducers:
        {
            addmovies(state,action){
                state.nowplayingmovie = action.payload;
            },
            addmovietrailerid(state,action)
            {
                state.movietrailer = action.payload;
            },
            addtotalmovies(state,action)
            {
                state.totalmovies=action.payload;
            }
        },
    },
);
export const {addmovies,addmovietrailerid,addtotalmovies} = MovieSlice.actions;
export default MovieSlice.reducer;