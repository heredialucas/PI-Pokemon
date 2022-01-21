import axios from "axios";
export const GET_POKEMONS = "getPokemons";
export const UPDATE_POKEMONS = "updatePokemons";
export const GET_POKEMONDETAIL = "getPokemonDetail";
export const GET_TYPES = "getTypes";
export const POST_POKEMON = "postPokemon";

export function getPokemons() {
  return function (dispatch) {
    return axios.get(`http://localhost:3001/api/pokemons/`).then((json) => {
      dispatch({ type: GET_POKEMONS, payload: json });
    });
  };
}

export function updatePokemons(data) {
  return {
    type: UPDATE_POKEMONS,
    payload: data,
  };
}

export function getTypes() {
  return function (dispatch) {
    return axios.get(`http://localhost:3001/api/types/`).then((json) => {
      dispatch({ type: GET_TYPES, payload: json });
    });
  };
}

export function postPokemon(data) {
  return function (dispatch) {
    return axios
      .post(`http://localhost:3001/api/pokemons/`, data)
      .then((json) => {
        dispatch({ type: POST_POKEMON, payload: json });
      });
  };
}
export function getPokemonDetail(id) {
  return function (dispatch) {
    return axios
      .get(`http://localhost:3001/api/pokemons/${id}`)
      .then((json) => {
        dispatch({ type: GET_POKEMONDETAIL, payload: json });
      });
  };
}
