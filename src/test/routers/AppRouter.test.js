import { mount } from "enzyme";
import { Provider } from "react-redux";
import { AuthContext } from "../../auth/authContext";
import { RouterRickAndMorty } from "../../routers/RouterRickAndMorty";
import store from "../../store";

describe("Test in <RouterRickAndMorty/>", () => {
  test("should show the login is not autenticated", () => {
    const contextValue = {
      user: {
        logged: false,
      },
    };
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <RouterRickAndMorty />
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("h1").text().trim()).toBe("Login");
  });

  test("should show the component characters", () => {
    const contextValue = {
      user: {
        logged: true,
        name: "Erick",
      },
    };
    const wrapper = mount(
      <Provider store={store}>
        <AuthContext.Provider value={contextValue}>
          <RouterRickAndMorty />
        </AuthContext.Provider>
      </Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".navbar").exists()).toBe(true);
  });
});
