import { render, screen } from "@testing-library/react";
import Header from "../components/Header/Header";
import { shallow, mount } from "enzyme";
import Modal from "../components/Modal/Modal";

describe("Tester for Header Component", () => {
  test("HEADER COMPONENT // Render without errors", () => {
    render(
      <Header
        searchValue={""}
        setSearchValue={function (value: string): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
  });

  test("HEADER COMPONENT // Has h1 with expected word Green", () => {
    render(
      <Header
        searchValue={""}
        setSearchValue={function (value: string): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
    const heading = screen.getByText(/Green/);
    expect(heading).toBeInTheDocument();
  });
});

describe("Integration Tester for Header Component", () => {
  test("HEADER COMPONENT // Has and Render a Modal Component", () => {
    const wrapper = mount(
      <Header
        searchValue={""}
        setSearchValue={function (value: string): void {
          throw new Error("Function not implemented.");
        }}
      />
    );

    const actual = wrapper.contains(<Modal />);
    expect(actual).toBe(true);
  });
});

// test if input on change 
// test if click in login 
// test if click in cart