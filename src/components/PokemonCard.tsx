import { FC } from "react";
import Pokemon from "../types/Pokemon";
import { Link } from "react-router-dom";

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <div className="card col-xl-2 col-lg-3 col-md-3 col-sm-5 shadow glass" style={{ width: "13rem" }}>
      <img
        src={
          pokemon.imageUrl ||
          "https://cdn.pixabay.com/photo/2016/07/23/13/18/pokemon-1536849_960_720.png"
        }
        alt="pokemon"
        height="170px"
      />
      <div className="card-body text-center">
        <h4 className="card-title">{pokemon.name}</h4>
        <Link to={`/pokemons/${pokemon.name}`}>
          <button className="btn btn-info">show Detail</button>
        </Link>
      </div>
    </div>
  );
};

export default PokemonCard;
