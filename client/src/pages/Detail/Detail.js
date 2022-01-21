import { useParams } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonDetail } from "../../redux/actions/actions";
import { NavLink } from "react-router-dom";

export default function Detail() {
  const pokemonId = useParams();
  const dispatch = useDispatch();
  const pokemonDetail = useSelector((state) => state.pokemonDetail);

  useEffect(() => {
    dispatch(getPokemonDetail(pokemonId.id));
  }, [dispatch, pokemonId]);

  return (
    <div>
      {pokemonDetail?.map((pokemon) => {
        return (
          <div>
            <h3>{pokemon.name}</h3>
            <img src={pokemon.image} alt={pokemon.name} />
            <p>{pokemon.attack}</p>
            <p>{pokemon.defense}</p>
            <p>{pokemon.height}</p>
            <p>{pokemon.hp}</p>
            <p>{pokemon.speed}</p>
            <p>{pokemon.weight}</p>
            <ul>
              {pokemon.types?.map((type) => {
                return <li>{type}</li>;
              })}
            </ul>
          </div>
        );
      })}

      <NavLink to="/home">Volver</NavLink>
    </div>
  );
}
