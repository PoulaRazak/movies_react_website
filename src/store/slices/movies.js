import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllMovies, getSearch } from "../../services/movies.api";


export const moviesAction= createAsyncThunk("movies/getAll",async ({page=1,query})=>{
    try{
        if(query){
            return((await getSearch(query,page)).data.results)
        }
       const res= await getAllMovies(page)
      return res.data.results
    }catch(err){
        throw new Error("Error while loading movies")
    }
   
   
})

const moviesSlice= createSlice({
    name:"movies",
    initialState:{
        movies:[],
        loading:false,
        error:null
    },
    extraReducers:(builder)=>{
        builder.addCase(moviesAction.pending,(state,action)=>{
            state.loading=true
        })
        builder.addCase(moviesAction.fulfilled,(state,action)=>{
            state.loading=false
            state.movies=action.payload
        })
        builder.addCase(moviesAction.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.error
        })
    }
})

export default moviesSlice.reducer