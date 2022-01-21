import React, { useState } from 'react';
import "../css/buttonfinish.css"
import OrderData from './OrderData';

const ButtonFinish = ({fruitsOnCart}) => {

    const [isOrderVisible, setOrderVisible] = useState(false);

    const orderDataVisible = () => {
        setOrderVisible(true)
    }

    return ( 
        <div>
            <button className='button-finish' onClick={orderDataVisible}>Finalizar pedido</button>
            {isOrderVisible ? <OrderData onClose={() => setOrderVisible(false)} fruitsOnCart={fruitsOnCart} /> : null}
        </div>
    );
}
 
export default ButtonFinish;