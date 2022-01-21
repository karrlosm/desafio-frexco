import React from 'react';
import homeicon from "../img/casa.svg"
import { useHistory } from "react-router-dom";
import "../css/buttoncart.css"


const ButtonCart = () => {
    const history = useHistory();

    const goToHomeClick = () => {
		history.push(`/`);
	};

    return ( 
        <button className='cart' title='Voltar para a home' onClick={goToHomeClick}><img className='carticon' src={homeicon} alt="" /></button>
    );
}
 
export default ButtonCart;