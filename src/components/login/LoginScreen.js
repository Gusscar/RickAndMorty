import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";

export const LoginScreen = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    const action = {
      type: types.login,
      payload: { name: "Gustavo" },
    };

    dispatch(action);

    navigate("/rick", {
      replace: true,
    });
  };

  const containerStyle = {
    backgroundImage: "url(https://images5.alphacoders.com/876/876590.png)",
    width: "100vp",
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ color: "white" }}>Welcome..!</h1>
      <hr />

      <button
        className="btn btn-primary"
        style={{ width: "8%" }}
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};
