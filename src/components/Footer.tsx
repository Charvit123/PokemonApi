import { useContext } from "react";
import RouteContext from "./RouteContext";

const Footer = () => {
  const { offset, setOffset } = useContext(RouteContext);
  const nextPokemons = () => {
    setOffset(offset + 12);
  };
  const prevPokemons = () => {
    setOffset(offset - 12);
  };
  return (
    <>
      <nav>
        <ul className="grid grid-cols-2 justify-items-center relative bottom-5">
          <li>
            <button
              className="bg-gradient-to-r from-sky-200 to-sky-400 text-black font-bold py-2 px-4 rounded shadow-2xl
              "
              disabled={offset === 0 ? true : false}
              onClick={prevPokemons}
            >
              Previous
            </button>
          </li>
          <li>
            <button
              className="bg-gradient-to-r from-sky-200 to-sky-400 text-black font-bold py-2 px-4 rounded shadow-2xl"
              onClick={nextPokemons}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Footer;
