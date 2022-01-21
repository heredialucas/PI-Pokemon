import s from "./Cards.module.scss";

import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Cards() {
  const pokemons = useSelector((state) => state.pokemons);
  return (
    <>
      <div className={s.container}>
        {pokemons?.map((pokemon) => {
          return (
            <NavLink key={pokemon.name} className={s.card} to={`/detail/${pokemon.id}`}>
              <img src={pokemon.image} alt={pokemon.name} />
              <h2>{pokemon.name}</h2>
              <ul className={s.types}>
                {pokemon.types?.map((type) => {
                  return <li>{type}</li>;
                })}
              </ul>
            </NavLink>
          );
        })}
      </div>
    </>
  );
}
