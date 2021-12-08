
import React from 'react';
import { getActiveProductSelector } from '../../redux/slice/activeProduct.slice';
import { useAppSelector } from '../../redux/store.hooks';
import './singleProduct.css'

interface ProductsListProps {
    closeModal: any
}

const SingleProduct: React.FC<ProductsListProps> = ({ closeModal }) => {
    const activeProducts = useAppSelector(getActiveProductSelector)

    return (


        <div className="cardDetail" key={activeProducts[0].id}>
            <button className="closeDetails" onClick={() => closeModal(false)} >X</button>
            <img alt="plants" src={activeProducts[0].imageSrc} />
            <p>{activeProducts[0].name}</p>
            <p>{activeProducts[0].price} KR</p>
            <p className="detailsDescription">{activeProducts[0].description}</p>
        </div>
    )
}



export default SingleProduct;


