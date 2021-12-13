import { render,screen } from "@testing-library/react";
import { mount, shallow } from "enzyme";
import { Provider } from "react-redux";
import Home from "../screen/Home";
import store from "../redux/store";
import Card from "../components/card/Card"
import SingleProduct from "../components/SingleProduct/SingleProduct";
import { initialState } from "../redux/slice/products.slice";

// import { render, screen } from "@testing-library/react";
// import Header from "../components/Header/Header";
// import { shallow, mount } from "enzyme";
// import Login from "../components/Login/Login";


describe("Tester for Home Component", () => {
    test("HOME - Test if Home component render without errors", () => {
        render(
            <Provider store={store}>
                <Home />
            </Provider>
        );
    });

    test("HOME - Test if Home component contains <Card/> component", () => {
        const wrapper = mount(
            <Provider store={store}>
                <Home />
            </Provider>
        );
        expect(wrapper.containsMatchingElement(<Card setRenderComponent={undefined} />)).toEqual(true);
    });
    
    test("HOME - Test if <SingleCard/> component render after image has clicked", () => {
        const wrapper = mount(
            <Provider store={store}>
                <Home />
            </Provider>
        );
        expect(wrapper.containsMatchingElement(<Card setRenderComponent={undefined} />)).toEqual(true);
        wrapper.find(".SingleCard").simulate("click")
        expect(wrapper.find("img").length).toEqual(6)
        wrapper.find("img").at(0).simulate("click")
        expect(wrapper.containsMatchingElement(<SingleProduct closeModal={undefined} />)).toEqual(true)
    });
});
