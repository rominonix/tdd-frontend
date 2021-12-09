import { render } from "@testing-library/react";
import { mount, shallow } from "enzyme";
import { Provider } from "react-redux";
import Home from "../screen/Home";
import store from "../redux/store";
import Card from "../components/card/Card"
import SingleProduct from "../components/SingleProduct/SingleProduct";
import { initialState } from "../redux/slice/products.slice";

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

        expect(
            wrapper.containsMatchingElement(<Card setRenderComponent={undefined} />)).toEqual(true);
    });
    test("HOME - Test if Home Component contains <SingleCard/> component", () => {

        const wrapper = shallow(
            <Provider store={store}>
                <Home />
            </Provider>
        );
        const product = initialState[0]
        console.log(product)
        wrapper.find(".SingleCard").find(".001").simulate("click");
        expect(wrapper.find(<SingleProduct closeModal={undefined} />).length).toEqual(1)
        // const wrapper = mount(
        //     <Provider store={store}>
        //         <Home />
        //     </Provider>
        // );
        // wrapper.find(".singlecard").simulate("click");

    });
});
