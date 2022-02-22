import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemons } from "../components/api/getPokemons";
import axios from "axios";
import { toggleLoader } from "./uiSlices";

const initialState = {
  list: [],
};

export const getPokemonsWithDetail = createAsyncThunk(
  "pokemon/getPokemonsWithDetail",
  async (_, { dispatch }) => {
    try {
      dispatch(toggleLoader());
      getPokemons()
        .then((data) => {
          const pokemonList = data.results;

          return Promise.all(
            pokemonList.map((pokemon) => axios.get(pokemon.url))
          );
        })
        .then((pokemonResponse) => {
          const pokemonData = pokemonResponse.map((response) => response.data);
          dispatch(setPokemon(pokemonData));
          dispatch(toggleLoader());
        })
        .catch((error) => {
          console.error(error);
          dispatch(toggleLoader());
        });
    } catch (error) {
      console.error(error);
      dispatch(toggleLoader());
    }
  }
);

export const pokemonSlices = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemon: (state, action) => {
      state.list = action.payload;
    },
    setFavorite: (state, action) => {
      state.list = state.list.map((pokemon) =>
        pokemon.id === action.payload
          ? { ...pokemon, favorite: !pokemon.favorite }
          : pokemon
      );
    },
  },
});

export const { setPokemon, setFavorite } = pokemonSlices.actions;

export default pokemonSlices.reducer;
