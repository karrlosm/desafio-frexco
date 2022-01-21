import React from 'react';
import FruitShow from './FruitShow';


const FruitOnFeed = ({fruit, addToCartClick}) => {
    return ( 
        <FruitShow fruit={fruit} functionbt={addToCartClick} childrenbt={"Adicionar ao carrinho"}/>
    );
}
 
export default FruitOnFeed;