import { GET_POKEMONS } from "../actions/actions";
import { UPDATE_POKEMONS } from "../actions/actions";
import { GET_TYPES } from "../actions/actions";
import { POST_POKEMON } from "../actions/actions";
import { GET_POKEMONDETAIL } from "../actions/actions";

const initialState = {
  pokemons: [],
  pokemonDetail: [],
  types: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS:
      console.log(action.payload.data);
      return {
        ...state,
        pokemons: action.payload.data,
      };
    case UPDATE_POKEMONS:
      return {
        ...state,
        pokemons: [...state.pokemons, action.payload],
      };
    case GET_TYPES:
      return {
        ...state,
        types: [...state.types, action.payload.data],
      };
    case POST_POKEMON:
      return {
        ...state,
      };
    case GET_POKEMONDETAIL:
      if (action.payload.data.id.length > 10) {
        const types = action.payload.data.types.map((e) => {
          return e.name;
        });
        action.payload.data.types = types;

        console.log(action.payload.data);
      }
      return {
        ...state,
        pokemonDetail: [action.payload.data],
      };
    default:
      return state;
  }
}

export default rootReducer;
