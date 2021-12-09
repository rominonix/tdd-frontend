import { render, screen } from "@testing-library/react";
import Header from "../components/Header/Header";
import { shallow, mount } from "enzyme";
import Login from "../components/Login/Login";
import { Provider } from "react-redux";
import store from "../redux/store";
import Card from "../components/card/Card";
import { useState } from "react";
import SingleProduct from "../components/SingleProduct/SingleProduct";

describe("Tester for SingleCard Component", () => {
  test("CardDetails - Test if SingleCard Component render without errors", () => {
    
    render(
        <Provider store={store}>
             <SingleProduct  closeModal={undefined}/> 
        </Provider>
    );
  });

//   test("Card - Test if Header Component has <p> with expected word Hortensia", () => {
//     render(
//         <Provider store={store}>
//         <Card setRenderComponent={undefined}/>
//     </Provider>
//     );
    
//     const heading = screen.getByText(/Hortensia/);
//     expect(heading).toBeInTheDocument();
//   });
  
//   test("Card - Test if click in icon-login comes Login view", () => {
//     const wrapper = mount(
//       <Header
//         searchValue={""}
//         setSearchValue={function (value: string): void {
//           throw new Error("Function not implemented.");
//         }}
//       />
//     );

//     expect(wrapper.find("nav").length).toEqual(1);
//     wrapper.find(".icon-login").simulate("click");
//     expect(
//       wrapper.containsMatchingElement(<Login closeModal={undefined} />)
//     ).toEqual(true);
//   });
});
