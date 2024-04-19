import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  persons: [],
};

const personsSlice = createSlice({
  name: "persons",
  initialState,
  reducers: {
    addPerson: (state, action) => {
      state.persons.push(action.payload);
    },
  },
});

export const { addPerson } = personsSlice.actions;
export default personsSlice.reducer;
