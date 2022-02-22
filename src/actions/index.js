import { SET_POKEMON, TOGGLE_LOADER, SET_FAVORITE } from "./type";
import { getPokemons } from "../components/api/getPokemons";

import axios from "axios";

export const setPokemon = (payload) => ({
  type: SET_POKEMON,
  payload,
});

const toggleLoader = () => ({
  type: TOGGLE_LOADER,
});

export const setFavorite = (payload) => {
  return {
    type: SET_FAVORITE,
    payload,
  };
};

export const getPokemonsWithDetail = () => (dispatch) => {
  dispatch(toggleLoader());
  getPokemons()
    .then((data) => {
      const pokemonList = data.results;

      return Promise.all(pokemonList.map((pokemon) => axios.get(pokemon.url)));
    })
    .then((pokemonResponse) => {
      const pokemonData = pokemonResponse.map((response) => response.data);
      dispatch(setPokemon(pokemonData));
      dispatch(toggleLoader());
      // console.log(pokemonData);
    })
    .catch((error) => {
      console.error(error);
      dispatch(toggleLoader());
    });
};
