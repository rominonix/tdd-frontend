import { render, screen } from "@testing-library/react";
import { shallow, mount } from "enzyme";
import store from "../redux/store";
import { Provider } from "react-redux";
import Cart from "../components/Cart/Cart";
import ProductInCart from "../components/ProductInCart/ProductInCart";

describe("Tester for Cart View", () => {
  test("CART - Test if Cart render without errors", () => {
    render(
      <Provider store={store}>
        <Cart closeModal={undefined} />
      </Provider>
    );
  });

  test("CART - Test if Cart View has h2 with expected word Total", () => {
    render(
      <Provider store={store}>
        <Cart closeModal={undefined} />
      </Provider>
    );
    const heading = screen.getByText(/Total/);
    expect(heading).toBeInTheDocument();
  });

  test("CART - Test if h2 in Cart view", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Cart closeModal={undefined} />
      </Provider>
    );
    expect(wrapper.find("h2").length).toEqual(2);
  });

  test("CART - Test if Cart contains ProductInCart View", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Cart closeModal={undefined} />
      </Provider>
    );
    expect(wrapper.find("main").length).toEqual(2);
    expect(wrapper.containsMatchingElement(<ProductInCart />)).toEqual(true);
  });
});
