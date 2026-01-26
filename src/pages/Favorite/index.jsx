import { useSelector } from "react-redux";
import MovieCard from "../../components/card";
import { useTranslation } from 'react-i18next';

function Favorite(){

    const{t,i18n} =useTranslation()

    const favorites = useSelector((state)=>state.favorite.items);
    console.log(favorites)


    return <>
    <div className="p-2">
    <h1 className="text-2xl font-bold">{t('favorite movies')}</h1>
     <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">

        {favorites.length ===0?<p className="text-center mt-10">No favorite movies yet ❤️</p>: favorites.map((m)=>{
            return <MovieCard movies={m} key={m.id}/>
        })}
        
        
     </div>

    </div>
    </>
}
export default Favorite;