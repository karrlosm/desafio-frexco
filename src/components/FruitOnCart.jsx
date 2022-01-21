import React, { useState } from 'react';
import FruitShow from './FruitShow';
import ModalDataFruit from './ModalDataFruit';


const FruitOnCart = ({fruit}) => {

    const [isDataVisible, setDataVisible] = useState(false);

    const modalVisible = () => {
        setDataVisible(true)
    }

    return ( 
        <>
            <FruitShow fruit={fruit} functionbt={modalVisible} childrenbt={"Informações nutricionais"}/>
            {isDataVisible ? <ModalDataFruit onClose={() => setDataVisible(false)} fruit={fruit}/> : null}
        </>
        
        
    );
}
 
export default FruitOnCart;