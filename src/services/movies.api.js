import { axiosInstance } from "./axiosInstance"

export function getAllMovies(page){
    return axiosInstance.get('movie/popular',{
        params:{
            page:page,
        }
    })
}

export function getMovieById(id){
    return axiosInstance.get(`movie/${id}`)
}

export function getSearch(query, page = 1){
    return axiosInstance.get("search/movie",{
        params:{
            query,
            page
        }
    })
}