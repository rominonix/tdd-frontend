import { render } from "@testing-library/react";
import { mount } from "enzyme";
import App from "./App";
import Home from "./screen/Home";
import { Provider } from "react-redux";
import store from "./redux/store";

describe("Tester for App Component", () => {
  it("APP // Render without errors", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
});

describe("APP // Integration test", () => {
  test("HOME SCREEN // Render initially", () => {
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const actual = wrapper.contains(<Home />);
    expect(actual).toBe(true);
  });
});
