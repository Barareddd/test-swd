import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  persons: [],
};

const personSlice = createSlice({
  name: "personListing",
  initialState,
  reducers: {
    addPerson: (state, action) => {
      state.persons = action.payload;
    },
  },
});

export const { addPerson } = personSlice.actions;
export default personSlice.reducer;
