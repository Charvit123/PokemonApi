import { FC } from "react";
import Pokemon from "../types/Pokemon";
import { Link } from "react-router-dom";

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <div className="overflow-hidden shadow-2xl bg-white justify-center rounded-lg hover:bg-gradient-to-bl from-sky-300 via-slate-50 to-sky-300 m-3">
      <img
        src={
          pokemon.imageUrl ||
          "https://cdn.pixabay.com/photo/2016/07/23/13/18/pokemon-1536849_960_720.png"
        }
        alt="pokemon"
        // height="150px"
        className="w-full"
      />
      <div className="px-6 py-4 text-center">
        <h4 className="font-bold text-xl mb-2">{pokemon.name}</h4>
        <Link to={`/pokemons/${pokemon.name}`}>
          <button
            className="inline-block text-lg bg-gray-200 rounded-full px-3 py-1 font-semibold text-black bg-gradient-to-r from-gray-100 to-gray-400 
          mr-2 mb-2"
          >
            show Detail
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PokemonCard;
