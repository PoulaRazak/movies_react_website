import { IoSearch } from "react-icons/io5";
import { FcVideoCall } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import iconImage from "../../assets/images/film-reel.png"

function Navbar() {

  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const { t, i18n } = useTranslation()

  const changeLanguage = () => {
    const newlang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newlang)
    localStorage.setItem('lang', newlang)

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

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      <div className="bg-linear-to-r from-red-800 to-black text-white">
        {/* Main navbar row */}
        <div className="flex flex-row items-center p-4 justify-between">
          {/* Logo */}
          <div className="flex flex-row items-center gap-1">
            <img src={iconImage} className="w-7 h-7" />
            <h1 className="ml-2 text-2xl font-bold">{t('filmak')}</h1>
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex flex-row gap-4">
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

          {/* Right controls */}
          <div className="flex flex-row items-center gap-5">
            <div onClick={toggleSearch}>
              <IoSearch className="text-xl cursor-pointer" />
            </div>
            <div>
              <button className="bg-blue-800 rounded py-1 px-2 cursor-pointer hover:bg-transparent"
                onClick={() => { changeLanguage() }}
              >
                {(i18n.language === 'en' ? 'AR' : 'EN')}
              </button>
            </div>
            <div className="cursor-pointer"
              onClick={() => {
                setTheme(theme == "light" ? "dark" : "light")
              }}
            >
              {theme == 'dark' ? <Icon
                icon="streamline-ultimate-color:light-mode-bright-dark"
                width="24"
                height="24"
              /> : <Icon icon="icon-park:dark-mode" width="32" height="32" />}
            </div>
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-6 rounded-full ring-2 ring-offset-2">
                <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
              </div>
            </div>

            {/* Hamburger button — mobile only */}
            <button
              className="md:hidden flex flex-col gap-1 cursor-pointer"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Search bar below navbar */}
        {showSarch && (
          <div className="px-4 pb-3 pt-2 border-t border-white/20">
            <input
              type="text"
              placeholder={t("search")}
              className="w-full rounded-xl px-4 py-2 border border-gray-400 bg-black/60 text-white placeholder-gray-400 outline-none"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch(e);
                }
              }}
              autoFocus
            />
          </div>
        )}

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col gap-3 px-4 pb-4 border-t border-white/20">
            <Link to="/" onClick={toggleMenu}>{t('home')}</Link>
            <Link to="/movies" onClick={toggleMenu}>{t('movies')}</Link>

            {favorites.length === 0 ? (
              <Link to="/favorite" onClick={toggleMenu}>{t('favorite')}</Link>
            ) : (
              <div className="indicator cursor-pointer">
                <span className="indicator-item badge badge-error text-white w-4 h-4 p-1 top-1">
                  {favorites.length}
                </span>
                <Link to="/favorite" onClick={toggleMenu}>{t('favorite')}</Link>
              </div>
            )}

            <Link to="/login" onClick={toggleMenu}>{t('login')}</Link>
            <Link to="/register" onClick={toggleMenu}>{t('register')}</Link>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
