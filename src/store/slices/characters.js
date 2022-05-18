import { createSlice } from "@reduxjs/toolkit";

//axios
import axios from "axios";

export const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    list: [],
  },
  reducers: {
    setCharactersList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setCharactersList } = charactersSlice.actions;

export default charactersSlice.reducer;

export const fechtAllCharacters = (url) => {
  return (dispatch) => {
    axios
      .get(url)
      .then((response) => {
        dispatch(setCharactersList(response.data));
      })
      .catch((error) => console.log(error));
  };
};
