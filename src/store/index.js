import { configureStore } from "@reduxjs/toolkit";

//reducer
import characters from "./slices/characters";
import locations from "./slices/location";

export default configureStore({
  reducer: {
    characters,
    locations,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
