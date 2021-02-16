const initialState = { value: 0 };

function counter2Reducer(state = initialState, action) {
  switch (action.type) {
    case "counter2/incremented":
      return { ...state, value: state.value + 1 };
    default:
      return state;
  }
}

const counter2Selector = (state) => state.counter2.value;

export { counter2Reducer, counter2Selector };
