import "./Cards.scss";
import { NavLink } from "react-router-dom";

export default function Cards(page) {
  return (
    <>
      <div className="container">
        {page?.page?.map((pokemon, index) => {
          return (
            <NavLink
              key={index}
              className="card"
              to={`/detail/${pokemon?.id}`}
            >
              <div className="img">
                <img src={pokemon?.image} alt={pokemon?.name} />
              </div>
              <div className="content">
                <h2>{pokemon?.name}</h2>
                <ul className="types">
                  <p>Tipo:</p>
                  {pokemon?.types?.map((type, index) => {
                    return <li key={index}>{type}</li>;
                  })}
                </ul>
              </div>
            </NavLink>
          );
        })}
      </div>
    </>
  );
}
