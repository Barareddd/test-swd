// store.js

import { configureStore } from "@reduxjs/toolkit";
import personsReducer from "./personsSlice";
import { saveStateToLocalStorage } from "../localStorage";

const store = configureStore({
  reducer: {
    persons: personsReducer,
  },
});

store.subscribe(() => {
  saveStateToLocalStorage(store.getState());
});

export default store;
