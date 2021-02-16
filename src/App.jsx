import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { store } from "./store";
import { counter2Selector } from "./features/counter2/counter2";

import "./App.css";

const App = () => {
  const [value1, setvalue1] = useState(0);
  const value2 = useSelector(counter2Selector);
  const dispatch = useDispatch();

  const updatevalue1 = () => {
    const state = store.getState();
    setvalue1(state.counter1.value);
  };

  store.subscribe(updatevalue1);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "20em",
      }}
    >
      <span>Counter 1 : {value1}</span>
      <button onClick={() => store.dispatch({ type: "counter1/incremented" })}>
        Add 1
      </button>
      <span>Counter 2 : {value2}</span>
      <button onClick={() => dispatch({ type: "counter2/incremented" })}>
        Add 1
      </button>
    </div>
  );
};

export default App;
