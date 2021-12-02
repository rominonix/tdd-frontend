
import React from 'react';
import Card from "../components/card/Card";
import { Plant } from '../module/Plant';
import Cart from '../components/Cart/Cart'
interface Props {
    plants:Plant[]
}

function Home({ plants }: Props) {
    return (
        <main>
        <Cart/>
            <Card plants={plants}/>
        </main>
    );
}

export default Home;