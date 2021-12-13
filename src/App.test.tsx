import { render } from "@testing-library/react";
import { mount } from "enzyme";
import App from "./App";
import Home from "./screen/Home";
import { Provider } from "react-redux";
import store from "./redux/store";
import Header from "./components/Header/Header";

describe("Tester for App Component", () => {
  test("APP - Test if App Component render without errors", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
  test("APP - Test if Home Screen renders into App Component initially", () => {
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const actual = wrapper.contains(<Home />);
    expect(actual).toBe(true);
  });

  test("APP - Test if className 'App' exist", () => {
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(wrapper.find(".App").length).toEqual(1);
   
  });
});
