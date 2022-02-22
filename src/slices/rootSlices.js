import { combineReducers } from "redux";
import pokemonSlices from "./pokemonSlices";
import uiSlices from "./uiSlices";

const rootSlices = combineReducers({
  pokemon: pokemonSlices,
  ui: uiSlices,
});

export { rootSlices };
