import { render, screen } from "@testing-library/react";
import { shallow, mount } from "enzyme";
import store from "../redux/store";
import { Provider } from "react-redux";
import ProductInCart from "../components/ProductInCart/ProductInCart";

describe("Tester for ProductInCart Component", () => {
  test("PRODUCT IN CART - Test if ProductInCart render without errors", () => {
    render(
      <Provider store={store}>
        <ProductInCart />
      </Provider>
    );
  });

  test("PRODUCT IN CART - Test if ProductInCart View has h3 with expected word Order", () => {
    render(
      <Provider store={store}>
        <ProductInCart />
      </Provider>
    );
    const heading = screen.getByText(/Order/);
    expect(heading).toBeInTheDocument();
  });

});
