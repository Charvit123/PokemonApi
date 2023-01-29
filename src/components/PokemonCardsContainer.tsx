import { FC } from "react";
import Pokemon from "../types/Pokemon";
import Footer from "./Footer";
import PokemonCard from "./PokemonCard";

interface PokemonCardsContainerProps {
  pokemons: Pokemon[];
}

const PokemonCardsContainer: FC<PokemonCardsContainerProps> = ({
  pokemons,
}) => {
  return (
    <div className="">
      <div className="grid grid-col-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:gap-4 md:gap-2 p-5 mb-5">
        {pokemons.map((currPokemon, idx) => (
          <PokemonCard pokemon={currPokemon} key={idx} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default PokemonCardsContainer;
