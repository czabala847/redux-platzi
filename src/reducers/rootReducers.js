import { combineReducers } from "redux";
import { pokemonReducers } from "./pokemonReducers";
import { uiReducers } from "./uiReducers";

const rootReducers = combineReducers({
  pokemon: pokemonReducers,
  ui: uiReducers,
});

export { rootReducers };
