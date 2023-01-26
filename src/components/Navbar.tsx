import { useRef, FormEventHandler } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "./SearchIcon";

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
    <nav className="mb-5 p-3">
      <div
        style={{ height: "100% !important" }}
        className="p-0 d-flex items-center justify-content-between "
      >
        <Link className="fs-1" to="/">
          PokeApi
        </Link>
        <form onSubmit={searchPokemonFormSubmitHandler} className="d-flex p-2 gap-3 form-inline">
          <input
            type="text"
            placeholder="Enter id or name"
            ref={searchInputRef}
            className="form-control shadow"
          />
          <button type="submit" className="btn btn-primary shadow">
            <SearchIcon/>
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
