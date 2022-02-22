import { SET_POKEMON, SET_FAVORITE } from "../actions/type";

const initialState = {
  list: [],
};

const pokemonReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMON:
      return {
        ...state,
        list: action.payload,
      };
    case SET_FAVORITE:
      return {
        ...state,
        list: state.list.map((pokemon) =>
          pokemon.id === action.payload
            ? { ...pokemon, favorite: !pokemon.favorite }
            : pokemon
        ),
      };
    default:
      return {
        ...state,
      };
  }
};

export { pokemonReducers };
