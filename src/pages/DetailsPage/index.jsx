import { useParams } from "react-router";
import { getMovieById } from "../../services/movies.api";
import React, { useEffect, useState } from "react";
import Spiner from "../../components/Spiner";
import Toast from "../../components/toast";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import { saveToStorage, toggleFavorite } from "../../store/slices/favorite";



function Deatails() {

  


  const [showToast,setShowToast]=useState(false);
 const loader= useSelector((state)=>state.loader.loader)


  const { id } = useParams();
  console.log(id);
  const [movie, setMovies] = useState({});

  useEffect(() => {
    getMovieById(id)
      .then((res) => {
        setMovies(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleToast=()=>{
      setShowToast(true)
      
              setTimeout(()=>{
                setShowToast(false)
              },2000);
    }


    const dispatch =useDispatch();
  const favorite =useSelector((state)=>state.favorite.items);
    const isFav = favorite.some((m)=> m.id === movie.id);

    const handleClick=()=>{
      dispatch(toggleFavorite(movie));
      dispatch(saveToStorage());
      if(!isFav){
        handleToast()
      }
    }


  return (
    <>

    {loader ? <Spiner/> :
    
    
      <div
        className="min-h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
        }}
      >
            {showToast && <Toast text="Item added to favorite"/>}

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="flex flex-row w-full gap-7 p-8 relative z-10 ">
          <div className="hover-3d">
            {/* content */}
            <figure className="w-60 rounded-2xl">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt="Tailwind CSS 3D card"
              />
            </figure>
            {/* 8 empty divs needed for the 3D effect */}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          {/* <img
         src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt="Movie Image"
            className="w-80 h-110 object-cover rounded-lg mb-2 ml-2"
          /> */}
          <div className=" flex flex-col gap-3 ">
            <p className="text-white text-3xl font-bold mt-8">{movie.title}</p>
            <div className="flex flex-row gap-2 text-sm">
              <p>
                {movie.release_date} ({movie.origin_country})
              </p>
              <div className="flex flex-row gap-1">
                •
                {movie.genres?.map((g) => {
                  return (
                    <span key={g.id} className="">
                      {g.name}
                    </span>
                  );
                })}
              </div>
              <p>• {movie.runtime} second</p>
            </div>
            <p className="text-gray-400">{movie.tagline}</p>
            <p className="text-xl">Overview</p>
            <p>{movie.overview}</p>
            <div className="flex flex-row items-center gap-3 my-2">
            <button className="btn btn-xl hover:bg-red-500 px-12">Watch</button>
            <button className="btn btn-outline btn-secondary"
            onClick={handleClick}
            >
              <Icon icon="iconamoon:heart" width="24" height="24" />
            </button>

            
            </div>
          </div>
        </div>
      </div>
      }
    </>
  );
}
export default Deatails;
