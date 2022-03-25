import React from 'react';
import './Cart.css'

const Cart = ({ item }) => {
    console.log(item)
    const { name, img, price } = item;
    return (
        <div className='added-cart'>
            <img src={img} alt="" />
            <div className='cart-price-name'>
                <h2>{name}</h2>
                <p>${price}</p>
            </div>
        </div>
    );
};

export default Cart;