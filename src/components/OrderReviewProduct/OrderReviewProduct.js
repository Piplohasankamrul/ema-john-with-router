import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';

const OrderReviewProduct = (props) => {
    const {name,img,price,quantity,seller,key} = props.cart;
    const {handleRemoveProduct} = props;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>Sold by: {seller}</small></p>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
                <br />
                <button
                    onClick={() =>handleRemoveProduct(key)}
                    className="btn-regular"
                > remove</button>
            </div>
        </div>
    );
};

export default OrderReviewProduct;