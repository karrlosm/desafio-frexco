import React from 'react';
import carticon from "../img/carrinho-de-compras.svg"
import { useHistory } from "react-router-dom";
import "../css/buttoncart.css"


const ButtonCart = ({fruitsOnCart}) => {
    const history = useHistory();

    const goToCartClick = () => {
		history.push(`/cart`);
	};

    return ( 
        <div className='space'>
            
            <button className='cart' title='Ir para o carrinho' onClick={goToCartClick}><img className='carticon' src={carticon} alt="" /></button>
            <div className='howmany' title='Ir para o carrinho' onClick={goToCartClick}>{fruitsOnCart}</div>
        </div>
        
        
        
    );
}
 
export default ButtonCart;