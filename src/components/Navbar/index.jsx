import { IoSearch } from "react-icons/io5";
import { FcVideoCall } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { useEffect, useState} from "react";
import { useTranslation } from 'react-i18next';
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import iconImage from "../../assets/images/film-reel.png"

function Navbar() {

  const [theme,setTheme]=useState('dark')

   useEffect(() => {
  document.documentElement.setAttribute("data-theme", theme);
}, [theme]);

  const{t,i18n} =useTranslation()

  const changeLanguage=()=>{
    const newlang =i18n.language === 'en' ? 'ar' :'en';
    i18n.changeLanguage(newlang)
    localStorage.setItem('lang',newlang)

  }

  const favorites = useSelector((state) => state.favorite.items);

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) return;

    navigate(`/movies?search=${search}&page=1`);
  };

  const [showSarch, setShowSerach] = useState(false);
  const toggleSearch = () => {
    setShowSerach((showSarch) => !showSarch);
  };

  return (
    <>
      <div className="flex flex-row items-center p-4 bg-linear-to-r from-red-800 to-black text-white justify-between">
        <div className="flex flex-row items-center gap-1 ">
          <img src={iconImage} className="w-7 h-7"/>

          <h1 className="ml-2 text-2xl font-bold">{t('filmak')}</h1>
        </div>
        <div className="flex flex-row gap-4">
          <Link to="/">{t('home')}</Link>
          <Link to="/movies">{t('movies')}</Link>

          
           {favorites.length === 0 ? <Link to="/favorite">{t('favorite')}</Link> : 
            <div className="indicator cursor-pointer">
           <span className="indicator-item badge badge-error text-white w-4 h-4 p-1 top-1">
              {favorites.length}
            </span>
            <Link to="/favorite">{t('favorite')}</Link>
          </div>

           } 
          
         <Link to="/login">{t('login')}</Link>
         <Link to="/register">{t('register')}</Link>

        </div>
        <div className="flex flex-row items-center gap-5">
          <div>
            {showSarch && (
              <input
                type="text"
                placeholder= {t("search")}
                className="rounded-xl px-4 py-1  border border-gray-400 "
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch(e);
                  }
                }}
              />
            )}
          </div>
          <div onClick={toggleSearch}>
            <IoSearch className="text-xl cursor-pointer" />
          </div>
          <div>
            
            <button className="bg-blue-800 rounded py-1 px-2 cursor-pointer hover:bg-transparent"
            onClick={()=>{changeLanguage()}}
            >
             {(i18n.language === 'en'? 'AR' : 'EN')} </button>
          </div>
          <div className="cursor-pointer" 
          onClick={()=>{
                setTheme(theme == "light" ? "dark" :"light")
              }}
          >
            {theme=='dark'?<Icon
              icon="streamline-ultimate-color:light-mode-bright-dark"
              width="24"
              height="24"
            /> :<Icon icon="icon-park:dark-mode" width="32" height="32" /> }
            
          </div>
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-6 rounded-full ring-2 ring-offset-2">
              <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
