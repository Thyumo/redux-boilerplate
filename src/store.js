import { createStore } from "redux";

const initialState = { value: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "counter/incremented":
      return { ...state, value: state.value + 1 };
    default:
      return state;
  }
}

const store = createStore(counterReducer);

export { store };
