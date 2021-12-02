
import React from 'react';
import Card from "../components/card/Card";
import { Plant } from '../module/Plant';

interface Props {
    plants:Plant[]
}

function Home({ plants }: Props) {
    return (
        <main>
            <Card plants={plants}/>
        </main>
    );
}

export default Home;