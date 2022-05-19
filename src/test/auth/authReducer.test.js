import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe("authReducer test", () => {
  test("should return state default", () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });
});

test("should authenticated and put the user name", () => {
  const action = {
    type: types.login,
    payload: {
      name: "Gustavo",
    },
  };

  const state = authReducer({ logged: false }, action);

  expect(state).toEqual({
    logged: true,
    name: "Gustavo",
  });
});
test("should delete user name and logged false", () => {
  const action = {
    type: types.logout,
  };

  const state = authReducer({ logged: true, name: "Gustavo" }, action);
  console.log(state);
  expect(state).toEqual({ logged: false });
});
