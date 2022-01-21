import React, { useState } from 'react';
import '../css/cart.css'
import deleteicon from "../img/lixo.svg"
import incrementicon from "../img/adicionar.svg"
import decrementicon from "../img/remover.svg"
import FruitOnCart from './FruitOnCart';
//import ModalDataFruit from './ModalDataFruit';

const CartData = ({fruitsOnCart, removeFruit}) => {

    const decrement = (fruit) => {
        if (fruit.quantidade > 1){
            fruit.quantidade --;
        } else{
            removeFruit(fruit.id)
        }
        let input = document.getElementById(fruit.name)
        input.value = fruit.quantidade
    }

    const increment = (fruit) => {
        fruit.quantidade++;
        let input = document.getElementById(fruit.name)
        input.value = fruit.quantidade
    }

    return (
        <>
        {fruitsOnCart.map((fruit) => (
            <div className="cart-data">
                <div className='labels' id='description'>
                    <label htmlFor="">Item</label>
                    <label htmlFor="">Quantidade</label>
                    <label htmlFor="">Excluir</label>             
                </div>
                <div className='details'>
                    <FruitOnCart
                        key={fruit.id} 
                        fruit={fruit}     
                    />
                    <div className='amount'>
                        <button className='amount-control'><img className='amount-icon' title='Diminuir' onClick={() => decrement(fruit)} src={decrementicon}/></button>
                        <input type="text" id={fruit.name} className='amount-value' title='Quantidade atual' value={fruit.quantidade} readOnly />
                        <button className='amount-control'><img className='amount-icon' title='Adicionar' onClick={() => increment(fruit)} src={incrementicon}/> </button>
                    </div>
                    <div className='delete'>
                        <button className='deletespace'><img className='deletebtn' title='Remover item do carrinho' src={deleteicon} onClick={() => removeFruit(fruit.id)} /></button>
                    </div>   
                </div>    
            </div>
		))}
        </>
    );
}
 
export default CartData;