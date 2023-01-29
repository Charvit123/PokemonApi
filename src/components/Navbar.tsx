import { useRef, FormEventHandler } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "./SearchIcon";
import "../css/navbar.css";

const Navbar = () => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const searchPokemonFormSubmitHandler: FormEventHandler<HTMLFormElement> = (
    e
  ) => {
    e.preventDefault();
    if (searchInputRef.current) {
      navigate(`/pokemons/${searchInputRef.current.value}`);
    }
  };
  return (
    <>
      <div className="flex justify-between relative top-7">
        <Link
          to="/"
          className="text-4xl relative left-4 sm:left-7 mb-8 lg:left-9 text-slate-700"
        >
          PokeApi
        </Link>
        <div className="relative right-5 sm:right-7 md:right-7 lg:right-7">
          <form
            onSubmit={searchPokemonFormSubmitHandler}
            className=" inline-flex space-x-2"
          >
            <input
              type="text"
              placeholder="Enter id or name"
              ref={searchInputRef}
              className="rounded-lg h-10 text-sm w-32 md:w-44 md:text-base sm:w-40 text-center"
            />
            <button
              type="submit"
              className="p-3 rounded-lg bg-slate-700 text-center text-white"
            >
              <SearchIcon />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Navbar;
