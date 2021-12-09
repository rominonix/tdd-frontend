import { render, screen } from "@testing-library/react";
import Header from "../components/Header/Header";
import { shallow, mount } from "enzyme";
import Login from "../components/Login/Login";
import { Provider } from "react-redux";
import store from "../redux/store";
import Card from "../components/card/Card";
import SingleProduct from "../components/SingleProduct/SingleProduct";
import {initialState} from "../redux/slice/products.slice"

describe("Tester for Card Component", () => {
  test("Card - Test if Card Component render without errors", () => {
    render(
        <Provider store={store}>
            <Card setRenderComponent={undefined}/>
        </Provider>
    );
  });

  test("Card - Test if Header Component has <p> with expected word Hortensia", () => {
    render(
        <Provider store={store}>
        <Card setRenderComponent={undefined}/>
    </Provider>
    );
    
    const heading = screen.getByText(/Hortensia/);
    expect(heading).toBeInTheDocument();
  });
  
  // test("Card - Test if click in icon-login comes Login view", () => {
  //   const wrapper = shallow(
  //     <Provider store={store}>

  //       <Card setRenderComponent={undefined}/>
  //     </Provider>
  //   );
  //   const product= initialState[0]
  //   wrapper.find(`${product.id}`).simulate("click");
  //   expect(wrapper.find(<SingleProduct  closeModal={undefined}/>).length).toEqual(1)
  // });

//     expect(wrapper.find("nav").length).toEqual(1);
//     wrapper.find(".icon-login").simulate("click");
//     expect(
//       wrapper.containsMatchingElement(<Login closeModal={undefined} />)
//     ).toEqual(true);
//   });
});

