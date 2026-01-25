import { IoSearch } from "react-icons/io5";
import { FcVideoCall } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
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
        <div className="flex flex-row items-center">
          <FcVideoCall className="text-2xl" />

          <h1 className="ml-2 text-xl font-bold">Movies</h1>
        </div>
        <div className="flex flex-row gap-4">
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>

          
           {favorites.length === 0 ? <Link to="/favorite">Favorite</Link> : 
            <div className="indicator cursor-pointer">
           <span className="indicator-item badge badge-error text-white w-4 h-4 p-1 top-1">
              {favorites.length}
            </span>
            <Link to="/favorite">Favorite</Link>
          </div>

           } 
          
          <Link to="/about">About</Link>
         <Link to="/login">Login</Link>

        </div>
        <div className="flex flex-row items-center gap-5">
          <div>
            {showSarch && (
              <input
                type="text"
                placeholder="Search..."
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
            <button className="bg-blue-800 rounded py-1 px-2 cursor-pointer hover:bg-transparent">
              Ar
            </button>
          </div>
          <div className="cursor-pointer">
            <Icon
              icon="streamline-ultimate-color:light-mode-bright-dark"
              width="24"
              height="24"
            />
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
