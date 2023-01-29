import { useState, useEffect, useContext } from "react";
import Pokemon from "../types/Pokemon";
import axios from "axios";
import RouteContext from "../components/RouteContext";

const usePokemonApi = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);
  const {offset} = useContext(RouteContext);
    

  const fetchPokemons = async () => {
    try {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=12&&offset=${offset}`
      );
      const pokemons: Pokemon[] = data.results.map(
        (currPokemon: any, index: number): Pokemon => {
          return {
            height: 0,
            name: currPokemon.name,
            id: offset + index + 1,
            types: [],
            weight: 0,
            imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
             offset + index + 1
            }.png`,
          };
        }
      );

      setPokemons(pokemons);
      setError(null);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
      setPokemons([]);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, [offset]);

  return { pokemons, error, isLoading };
};

export default usePokemonApi;
