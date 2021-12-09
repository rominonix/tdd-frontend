import { render, screen } from "@testing-library/react";
import Header from "../components/Header/Header";
import { shallow, mount } from "enzyme";
import store from "../redux/store";
import { Provider } from "react-redux";
import Login from "../components/Login/Login";

describe("Tester for Header Component", () => {
  test("HEADER - Test if Header Component render without errors", () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
  });

  test("HEADER - Test if Header Component has h1 with expected word Green", () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    const heading = screen.getByText(/Green/);
    expect(heading).toBeInTheDocument();
  });

  test("HEADER - Test if click in icon-login comes Login view", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    expect(wrapper.find("nav").length).toEqual(1);
    wrapper.find(".icon-login").simulate("click");
    expect(
      wrapper.containsMatchingElement(<Login closeModal={undefined} />)
    ).toEqual(true);
  });
});

