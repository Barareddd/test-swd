// store.js

import { configureStore } from "@reduxjs/toolkit";
import personsReducer from "./personsSlice";
import {
  saveStateToLocalStorage,
  loadStateFromLocalStorage,
} from "../localStorage";

const persistedState = loadStateFromLocalStorage();

const store = configureStore({
  reducer: {
    persons: personsReducer,
  },

  preloadedState: persistedState,
});

store.subscribe(() => {
  saveStateToLocalStorage(store.getState());
});

export default store;
