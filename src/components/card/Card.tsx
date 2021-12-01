
import React from 'react';
import { Plant } from '../../module/Plant';
import AddToCard from '../addToCard/AddToCard';
import './card.css'

interface Props {
    plants:Plant[]
}

const Card=({ plants }: Props) =>(

            <div className="SingleCard">
                {plants.map(plant => (
                    <div key={plant.id} >
                        <img  alt="plants" src={plant.imageSrc} />
                        <p>{plant.name}</p>
                        <p>{plant.price} KR</p>
                        <AddToCard />
                    </div>
                    
                ))}
                
            </div>
        )


export default Card;

