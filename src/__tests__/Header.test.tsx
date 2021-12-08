import { render, screen } from "@testing-library/react";
import Header from "../components/Header/Header";
import { shallow, mount } from "enzyme";
import Login from "../components/Login/Login";

describe("Tester for Header Component", () => {
  test("HEADER - Test if Header Component render without errors", () => {
    render(
      <Header
        searchValue={""}
        setSearchValue={function (value: string): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
  });

  test("HEADER - Test if Header Component has h1 with expected word Green", () => {
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

describe("Integration Testers for Header Component", () => {
  test("HEADER - Test if click in icon-login comes Login view", () => {
    const wrapper = mount(
      <Header
        searchValue={""}
        setSearchValue={function (value: string): void {
          throw new Error("Function not implemented.");
        }}
      />
    );

    expect(wrapper.find("nav").length).toEqual(1);
    wrapper.find(".icon-login").simulate("click");
    expect(
      wrapper.containsMatchingElement(<Login closeModal={undefined} />)
    ).toEqual(true);
  });
});

// test if click in cart
