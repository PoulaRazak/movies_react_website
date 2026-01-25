import { createSlice } from "@reduxjs/toolkit";

 
 const favoriteSlice= createSlice({
    name:"favorite",
    initialState:{
        items: JSON.parse(localStorage.getItem("favorite")) || [],
    },
    reducers:{
        toggleFavorite:(state,action)=>{
            const movie =action.payload;
            const exists = state.items.find((m)=>{
                return m.id === movie.id
            });
            if(exists){
                state.items =state.items.filter((m)=>{
                  return  m.id !== movie.id
                });
            }else{
                state.items.push(movie);
            }
        },
        saveToStorage:(state)=>{
            localStorage.setItem("favorite", JSON.stringify(state.items));
        }
    }
 });

 export const {toggleFavorite ,saveToStorage} = favoriteSlice.actions;
 export default favoriteSlice.reducer;