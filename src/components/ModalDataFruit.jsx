import React from 'react';
import closeicon from "../img/x.svg"
import '../css/modaldatafruit.css'


const ModalDataFruit = ({id = "modal", onClose = () => {}, fruit}) => {

    const outsideClick = (e) => {
        if (e.target.id === id) {
            onClose();
        }
    }

    return ( 
        <div id={id} className='modal' onClick={outsideClick}>
            <div className='content'>
                <div className='close-space'><button onClick={onClose} className='close-modal'><img src={closeicon}></img></button></div>
                <div className='fruit-info'>
                   <h3 className='tittle-info'>Informações nutricionais:</h3> <br />
                   <h3>{fruit.name}</h3>
                   <label>Carboidratos: {fruit.nutritions.carbohydrates}</label>
                   <label>Proteínas: {fruit.nutritions.protein}</label>
                   <label >Gorduras: {fruit.nutritions.fat}</label>
                   <label >Calorias: {fruit.nutritions.calories}</label>
                   <label >Açucares: {fruit.nutritions.sugar}</label>
                </div>
                
            </div>

        </div>
    );
}
 
export default ModalDataFruit;