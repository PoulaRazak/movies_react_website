import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { saveToStorage, toggleFavorite } from "../../store/slices/favorite";




function MovieCard({movies,onFav}){
  // const[isFav,setIsFav]= useState(false)


  const dispatch =useDispatch();
   const favorites= useSelector((state)=> state.favorite.items);
   const isFav = favorites.some((m)=> m.id === movies.id);

const onHandleCLick=()=>{
  
    // setIsFav(isFav =>!isFav);
    dispatch(toggleFavorite(movies));
    dispatch(saveToStorage());
    onFav();
    
  
}

  const navigate =useNavigate()

  const NavigateToDetails=(id)=>{
    navigate(`/movie-details/${id}`)
  }


//   useEffect(() => {
//   localStorage.setItem("fav-" + movies.id, isFav);
// }, [isFav]);



    return <>
    <div className="flex flex-col border border-gray-300 rounded-lg p-4 shadow-2xl gap-2">
      <div className="relative group overflow-hidden cursor-pointer">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
            alt="’Movie Image"
            className="w-full h-full object-cover rounded-lg mb-2 group-hover:scale-105 group-hover:brightness-50 "
          />
          <div className="absolute top-2 left-2 z-10 border-2 border-yellow-500 rounded-full w-10 h-10 p-2 flex items-center backdrop-blur-md">
            <p className="text-gray-400 font-bold ">{movies.vote_average.toFixed(1)}</p>
          </div>
          <div className="absolute top-2 right-2 z-10 "  onClick={onHandleCLick} >
          <Icon icon= {isFav?"iconamoon:heart-fill": "iconamoon:heart"} width="32" height="32"
          className={`${isFav ? "text-red-500" : "hover:text-red-400"}`}
          />
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-400 group-hover:opacity-100"
          onClick={()=>{NavigateToDetails(movies.id)}}
          >
          <Icon icon="icon-park:play-one" width="48" height="48" />
          </div>
          </div>
          <h2 className="text-xl font-bold ">{movies.title}</h2>
          <p className="text-gray-400 mb-2">{movies.release_date}</p>
          
        </div>
    </>
}
export default MovieCard;