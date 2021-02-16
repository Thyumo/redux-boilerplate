const initialState = { value: 0 };

function counter1Reducer(state = initialState, action) {
  switch (action.type) {
    case "counter1/incremented":
      return { ...state, value: state.value + 1 };
    default:
      return state;
  }
}

export { counter1Reducer };
