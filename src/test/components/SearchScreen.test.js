import { mount } from "enzyme";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { SearchScreen } from "../../components/search/SearchScreen";
import store from "../../store";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("test in <SearchScreen/>", () => {
  test("should show correctly with default values", () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/search"]}>
          <SearchScreen />
        </MemoryRouter>
      </Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".alert-info").text().trim()).toBe(
      "Search a Character"
    );
  });

  test("should show Rick and Input with the value QueryString", () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/search?q=Rick"]}>
          <SearchScreen />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper.find("input").prop("value")).toBe("Rick");
  });

  test("should call the navigate new screen", () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/search"]}>
          <SearchScreen />
        </MemoryRouter>
      </Provider>
    );

    expect(
      wrapper.find("input").simulate("change", {
        target: {
          name: "searchText",
          value: "rick",
        },
      })
    );

    wrapper.find("form").prop("onSubmit")({
      preventDefault() {},
    });

    expect(mockNavigate).toHaveBeenCalledWith("?q=rick");
  });
});
