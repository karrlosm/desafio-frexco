import React from 'react';
import '../css/clearcart.css'
import { useHistory } from "react-router-dom";


const ClearCart = () => {

    const history = useHistory();

    const goToHomeClick = () => {
		history.push(`/`);
	};

    return (  
        <div className='content-message'>
            <h1 className='message' >Carrinho vazio :(</h1>
            <button className='back-btn' onClick={goToHomeClick}>Voltar às compras</button>
        </div>
    );
}
 
export default ClearCart;