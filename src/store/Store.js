import { configureStore } from "@reduxjs/toolkit";
import personSlice from "./Reducer";

export default configureStore({
  reducer: {
    persons: personSlice,
  },
});
