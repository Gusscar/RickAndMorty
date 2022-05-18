import { createSlice } from "@reduxjs/toolkit";

//axios
import axios from "axios";

export const locationsSlice = createSlice({
  name: "loactions",
  initialState: {
    list: [],
  },
  reducers: {
    setLocationsList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setLocationsList } = locationsSlice.actions;

export default locationsSlice.reducer;

export const fechtAllLocations = (url) => {
  return (dispatch) => {
    axios
      .get(url)
      .then((response) => {
        dispatch(setLocationsList(response.data));
      })
      .catch((error) => console.log(error));
  };
};
