import React from 'react';

import CartData from './CartData';


const Cart = ({fruitsOnCart, removeFruit}) => {
    return ( 
        <div className="contentc">
            <CartData fruitsOnCart={fruitsOnCart} removeFruit={removeFruit}/> <br />
        </div> 
    );
}
 
export default Cart;