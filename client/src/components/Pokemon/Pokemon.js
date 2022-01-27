import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Pokemon() {
  const pokemon = useSelector((state) => state.onePokemon);
  console.log(pokemon);
  if (!Array.isArray(pokemon)) {
    return (
      <div className="container">
        <NavLink className="card" to={`/detail/${pokemon.id}`}>
          <div className="img">
            <img src={pokemon.image} alt={pokemon.name} />
          </div>
          <div className="content">
            <h2>{pokemon.name}</h2>
            <ul>
              <p>Tipo :</p>
              {pokemon.types?.map((type, index) => {
                return <li key={index}>{type}</li>;
              })}
            </ul>
          </div>
        </NavLink>
      </div>
    );
  }
  return <></>;
}
