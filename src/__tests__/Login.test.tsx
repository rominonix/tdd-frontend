import { render, screen } from "@testing-library/react";
import { shallow, mount } from "enzyme";
import Login from "../components/Login/Login";

describe("Tester for Login View", () => {
  test("LOGIN - Test if Login render without errors", () => {
    render(<Login closeModal={undefined} />);
  });

  test("LOGIN- Test if Login View has h1 with expected word Sign", () => {
    render(<Login closeModal={undefined} />);
    const heading = screen.getByText(/Sign/);
    expect(heading).toBeInTheDocument();
  });

  test("LOGIN - Test if input field exist in Login view", () => {
    const wrapper = mount(<Login closeModal={undefined} />);
    expect(wrapper.find("input").length).toEqual(2);
  });

  test("LOGIN - Test if button className 'modal-close-button' exist in Login view", () => {
    const wrapper = mount(<Login closeModal={undefined} />);
    expect(wrapper.find('.modal-close-button').length).toEqual(1)
  });
});

