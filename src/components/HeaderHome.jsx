import React from 'react'
import '../css/header.css'
import ButtonCart from './ButtonCart'



const Header = ({fruitsOnCart}) => {
  return (
    <div className="header">
        <div className='logo'>
          Hortifruti do Karlos
        </div>
        <ButtonCart fruitsOnCart={fruitsOnCart}/>
        
    </div>
    
  )
}

export default Header;