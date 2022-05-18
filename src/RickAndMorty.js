import React, { useEffect, useReducer } from "react";
import { RouterRickAndMorty } from "./routers/RouterRickAndMorty";
import { Provider } from "react-redux";
import store from "./store";
import { AuthContext } from "./auth/authContext";
import { authReducer } from "./auth/authReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};

export const RickAndMorty = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);
  useEffect(() => {
    if (!user) return;
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <Provider store={store}>
      <AuthContext.Provider value={{ user, dispatch }}>
        <RouterRickAndMorty />
      </AuthContext.Provider>
    </Provider>
  );
};
