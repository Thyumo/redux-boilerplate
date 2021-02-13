import React, { useState } from "react";

import "./App.css";

import { store } from "./store";

const App = () => {
  const [value, setValue] = useState(0);

  const updateValue = () => {
    const state = store.getState();
    setValue(state.value);
  };

  store.subscribe(updateValue);

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
      <span>Counter : {value}</span>
      <button onClick={() => store.dispatch({ type: "counter/incremented" })}>
        Add 1
      </button>
    </div>
  );
};

export default App;
