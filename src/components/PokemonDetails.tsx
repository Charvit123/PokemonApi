import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import usePokemonDetailsApi from "../hooks/usePokemonDetailsApi";
import colorTypeOfPokemon from "./colorTypeOfPokemon";

export const PokemonDetails = () => {
  const { nameOrId } = useParams();
  const { isLoading, error, pokemon } = usePokemonDetailsApi(nameOrId);

  useEffect(() => {
    console.log(isLoading, error, pokemon);
  }, [isLoading, error, pokemon]);

  if (isLoading) {
    return <div>Loading Pokemon</div>;
  }

  if (error) {
    return <div className="">Error: {error}</div>;
  }

  if (pokemon) {
    return (
      <div className="flex justify-center relative top-8 sm:top-6 md:top-5 lg:top-5">
        <div className="overflow-hidden shadow-2xl bg-white hover:bg-gradient-to-bl from-sky-300 via-slate-50 to-sky-300 rounded-lg pb-1 px-4 max-w-sm  text-center relative bottom-2">
          <img
            src={
              pokemon.imageUrl ||
              "https://cdn.pixabay.com/photo/2016/07/23/13/18/pokemon-1536849_960_720.png"
            }
            alt={`${pokemon.name}-poster`}
            className="h-72"
          />
          <ul className="">
            <div className="space-y-1">
              <li className="text-lg font-semibold">Name : {pokemon.name}</li>
              <li className="text-lg font-semibold">
                Weight : {pokemon.weight}
              </li>
              <li className="text-lg font-semibold">
                Height : {pokemon.height}
              </li>

              <li className="mt-2">
                {pokemon.types.map((currPokemonType, idx) => {
                  const color: string =
                    colorTypeOfPokemon[currPokemonType] +
                    " rounded-xl p-1 px-2 m-1";
                  console.log(color);
                  return (
                    <span className={color}>
                      <span key={idx} className="">
                        {currPokemonType}
                      </span>
                    </span>
                  );
                })}
              </li>
            </div>
            <li>
              <Link to="/">
                <button
                  className="inline-block text-lg bg-gray-200 rounded-full px-3 py-1 font-semibold text-black bg-gradient-to-r from-gray-100 to-gray-400 
          mr-2 mb-2 mt-4"
                >
                  Go Back
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  return null;
};
