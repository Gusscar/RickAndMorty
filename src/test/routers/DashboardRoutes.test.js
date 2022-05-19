import { mount } from "enzyme";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { DashboardRoutes } from "../../routers/DashboardRoutes";
import store from "../../store";

describe("Test in <DashboardRoutes/>", () => {
  const contextValue = {
    user: {
      logged: true,
      name: "Santiago",
    },
  };

  test("should Show correctly", () => {
    const wrapper = mount(
      <Provider store={store}>
        <AuthContext.Provider value={contextValue}>
          <MemoryRouter initialEntries={["/"]}>
            <DashboardRoutes />
          </MemoryRouter>
        </AuthContext.Provider>
      </Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".text-info").text().trim()).toBe("Santiago");
  });

  test("should Show correctly Location", () => {
    const wrapper = mount(
      <Provider store={store}>
        <AuthContext.Provider value={contextValue}>
          <MemoryRouter initialEntries={["/location"]}>
            <DashboardRoutes />
          </MemoryRouter>
        </AuthContext.Provider>
      </Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("div").exists()).toBe(true);
  });
});
