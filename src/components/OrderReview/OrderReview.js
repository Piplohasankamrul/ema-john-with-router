import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import OrderReviewProduct from '../OrderReviewProduct/OrderReviewProduct';

const OrderReview = () => {
    const [products , setProducts] = useProducts();
    const [cart , setCart] = useCart(products);
    const handleRemoveProduct =key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        deleteFromDb(key);
        
    }
    const navigate = useNavigate();
    const handleOrder = () => {
        setCart([]);
        clearTheCart();
        navigate('/placeorder');
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                  cart.map(cart =><OrderReviewProduct key={cart.key} cart={cart}
                    handleRemoveProduct ={handleRemoveProduct}
                  ></OrderReviewProduct>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handleOrder} className="btn-regular">Place Order</button>
                    </Cart>
            </div>
            
        </div>
    );
};

export default OrderReview;