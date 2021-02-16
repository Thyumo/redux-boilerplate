import { createStore, combineReducers } from "redux";

import { counter1Reducer } from "./features/counter1/counter1";
import { counter2Reducer } from "./features/counter2/counter2";

const store = createStore(
  combineReducers({ counter1: counter1Reducer, counter2: counter2Reducer })
);

export { store };
