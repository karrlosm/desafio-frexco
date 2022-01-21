import React from 'react';
import '../css/fruitshow.css'

const FruitShow = ({fruit, functionbt, childrenbt}) => {
    return ( 
        <div className='fruit-conteiner'>
            <div className="fruit-data">
                {fruit.name}
            </div>
            <button className='button-add' onClick={functionbt}>{childrenbt}</button>
        </div>
    );
}
 
export default FruitShow;