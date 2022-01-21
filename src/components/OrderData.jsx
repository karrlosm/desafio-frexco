import React from 'react';
import '../css/modaldatafruit.css'
import FruitOnOrder from './FruitOnOrder';
import closeicon from "../img/x.svg"

const OrderData = ({id="modal", onClose = () => {}, fruitsOnCart}) => {

    const goToHomeClick = () => {
		window.location.replace('/')
	};

    const outsideClick = (e) => {
        if (e.target.id === id) {
            onClose();
        }
    }


    return ( 
        <>
        <div id={id} className="modal" onClick={outsideClick}>
            <div className="content">
                <div className='close-space'><button onClick={onClose} className='close-modal'><img title='Voltar ao carrinho' src={closeicon}/></button></div>
                <div id='tittle-comand'><h3>Comanda do pedido</h3></div>
                <div className="order">
                    <div className='barr'>
                        <h3>Item</h3>
                        <h3>Quantidade</h3>
                    </div>
                    {fruitsOnCart.map((fruit) => (
                        <FruitOnOrder key={fruit.id} fruit={fruit}/>
                    ))}
                </div>
                <button className='new-order' onClick={goToHomeClick}>Realizar um novo pedido</button>
            </div>
        </div>
        </>
    );
}
 
export default OrderData;