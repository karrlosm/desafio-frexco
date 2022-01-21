import React from 'react';
import '../css/modaldatafruit.css'

const FruitOnOrder = ({fruit}) => {
    return ( 
        <div className='list'>     
            <div className='fruit-name'>
                {fruit.name}    
            </div>
            <div className='fruit-amount'>
                {fruit.quantidade}
            </div>
        </div>
    );
}
 
export default FruitOnOrder;