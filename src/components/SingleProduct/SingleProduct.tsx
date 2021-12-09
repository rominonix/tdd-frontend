
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
            <div className="allDetail">
                    <button className="closeDetails" onClick={() => closeModal(false)} >X</button>
                <div className="detailImage">
                    <img alt="plants" src={activeProducts[0].imageSrc} />
                </div>
                <div className="detailsText">
                    <h1 className="name">{activeProducts[0].name}</h1>
                    <h2 className="price">{activeProducts[0].price} KR</h2>
                    <p className="detailsDescription">{activeProducts[0].description}</p>
                </div>
            </div>


        </div>
    )
}



export default SingleProduct;


