import { useEffect, useState } from "react";
import MovieCard from "../../components/card";
import { getAllMovies, getSearch } from "../../services/movies.api";
import { useSearchParams } from "react-router";
import Toast from "../../components/toast";
import { useDispatch, useSelector } from "react-redux";
import { moviesAction } from "../../store/slices/movies";


function Movies() {
  const [showToast,setShowToast]=useState(false);
  // const [movies, setMovies] = useState([]);
  // const [page,setPage]=useState(1)
 const [serchParams, setSearchParams]=useSearchParams()
 const query= serchParams.get("search")
  const pageNumber= Number(serchParams.get("page")) || 1;

  const dispatsh =useDispatch()
  const moviesState= useSelector((state)=>state.movies)
  
useEffect(()=>{

  // if(query){
  //   const getSearchData = getSearch(query,pageNumber).then((res)=>{
  //      setMovies(res.data.results)
  //     }).catch((e)=>{
  //       console.log(e)
  //     })
  // }else{
    // const getMovies = getAllMovies(pageNumber)
    // .then((res) => {
    //   setMovies(res.data.results);
    // })
    // .catch((err) => {
    //   console.log(err);
    // });

    dispatsh(moviesAction({page:pageNumber,query}))

  // }
  
    },[query,pageNumber])



    const nextPage=()=>{
      setSearchParams({page: pageNumber+1,
        ...(query && {serach:query})})
    };
    const prevPage=()=>{
      if(pageNumber>1){
        setSearchParams({page: pageNumber-1,
           ...(query && {search:query})})
      }
    }

    const handleToast=()=>{
      setShowToast(true)
      
              setTimeout(()=>{
                setShowToast(false)
              },3000);
    }

   

  return (
    <>
    {showToast && <Toast text="Item added to favorite" state={"success"}/>}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
        {moviesState.movies.map((mo)=>{ 
            return  <MovieCard movies={mo} key={mo.id} onFav={handleToast}/>
        })}
      {moviesState.movies.length === 0 && <p className="text-center text-gray-400 flex justify-center">No results found</p>}
      </div>
      <div className="flex flex-row items-center gap-4 justify-center mx-4 p-2">
        <button className={`text-white rounded px-4 py-1  ${pageNumber==1?"bg-transparent border border-gray-400":"bg-gray-600 cursor-pointer"}`}
         onClick={prevPage } 
         disabled={pageNumber==1}
         >Prev</button>
         <span>{pageNumber}</span>
        <button 
        className="bg-linear-to-r from-red-800 to-black text-white rounded px-4 py-1 cursor-pointer"
         onClick={nextPage}>Next</button>
      </div>
    </>
  );
}
export default Movies;
