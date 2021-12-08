import React, { useState } from "react";
import Card from "../components/card/Card";
import Cart from "../components/Cart/Cart";
import SingleProduct from "../components/SingleProduct/SingleProduct";

interface ProductsListProps {
    
}



const Home: React.FC<ProductsListProps>=({  })=> {
    const [renderComponent, setRenderComponent] = useState(false)

    return (
        <div>
            <Cart/>
            <Card setRenderComponent={setRenderComponent}/>
            {renderComponent ? <SingleProduct  closeModal={setRenderComponent}/> : null}
        </div>
       
    );
}

export default Home
