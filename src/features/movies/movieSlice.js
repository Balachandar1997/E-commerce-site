import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import Movieapi from '../../common/apis/Movieapi'
import { APIkey } from '../../common/apis/MovieapiKey'

export const fetchAsyncMovies=createAsyncThunk("movies/fetchAsyncMovies",async()=>{
    const response= await Movieapi.get(`movie?api_key=${APIkey}`);
    return response.data.results;
})

export const fetchAsyncShows=createAsyncThunk("movies/fetchAsyncShows",async()=>{
    const response= await Movieapi.get(`tv?api_key=${APIkey}`);
    return response.data.results;
})

const initialState={
    movies:[],
    shows:[]
}

const movieSlice=createSlice({
    name:'movies',
    initialState,
    reducers:{},
    extraReducers:{
        [fetchAsyncMovies.pending]:()=>{
            console.log("fetchAsyncMovies pending")
        },
        [fetchAsyncMovies.fulfilled]:(state,{payload})=>{
            console.log("fetchAsyncMovies Successful")
            return{...state,movies:payload}
        },
        [fetchAsyncShows.fulfilled]:(state,{payload})=>{
            console.log("fetchAsyncShows Successful")
            return{...state,shows:payload}
        },
        [fetchAsyncMovies.rejected]:()=>{
            console.log("fetchAsync rejected")
        }
    }
})

export const {addMovies}=movieSlice.actions;
export const getAllMovies=(state)=>state.movies.movies;
export const getAllShows=(state)=>state.movies.shows;
export default movieSlice.reducer;

