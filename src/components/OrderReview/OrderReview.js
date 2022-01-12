import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { deleteFromDb } from '../../utilities/fakedb';
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
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default OrderReview;