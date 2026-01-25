import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "./slices/louder"
import moviesReducer from "./slices/movies"
import favoriteReducer from "./slices/favorite"

const store =configureStore({
    reducer:{
        loader:loaderReducer,
        movies:moviesReducer,
        favorite:favoriteReducer,
    }
})
export default store