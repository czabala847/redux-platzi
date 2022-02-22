import { TOGGLE_LOADER } from "../actions/type";

const initialState = {
  loading: false,
};

const uiReducers = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LOADER:
      return {
        ...state,
        loading: !state.loading,
      };
    default:
      return {
        ...state,
      };
  }
};

export { uiReducers };
