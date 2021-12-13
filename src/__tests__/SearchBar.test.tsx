import { render, screen } from "@testing-library/react";
import { shallow, mount } from "enzyme";
import store from "../redux/store";
import { Provider } from "react-redux";
import SearchBar from "../components/search/SearchBar";

describe("Tester for SearchBar Component", () => {
  test("SEARCH BAR - Test if SearchBar render without errors", () => {
    render(
      <Provider store={store}>
        <SearchBar data={undefined} />
      </Provider>
    );
  });

  test("SEARCH BAR - Test if input in SearBar exist", () => {
    const wrapper = mount(
      <Provider store={store}>
        <SearchBar data={undefined} />
      </Provider>
    );
    expect(wrapper.find("input").length).toEqual(1);
  });
});
