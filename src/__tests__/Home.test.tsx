import { render } from "@testing-library/react";
import {  mount } from "enzyme";
import { Provider } from "react-redux";
import Home from "../screen/Home";
import store from "../redux/store";
import Card from "../components/card/Card"

describe("Tester for Home Component", () => {
    test("HOME - Test if Home Component render without errors", () => {
        render(
            <Provider store={store}>
                <Home />
            </Provider>
        );
    });

    test("HOME - Test if Home Component contains <Card/> Component", () => {
        const wrapper = mount(
            <Provider store={store}>
                <Home />
            </Provider>
        );

        expect(
            wrapper.containsMatchingElement(<Card setRenderComponent={undefined} />)).toEqual(true);
    });

});
