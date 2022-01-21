import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { BrowserRouter  as Router, Route} from 'react-router-dom';

import HeaderHome from './components/HeaderHome.jsx';
import HeaderCart from './components/HeaderCart.jsx';
import Location from './components/Location.jsx';
import Feed from './components/Feed.jsx';
import Cart from './components/Cart.jsx';
import ButtonFinish from './components/ButtonFinish.jsx';
import ClearCart from './components/ClearCart.jsx';
import Footer from './components/Footer.jsx';

import './App.css'


const App = () => {

  const [fruits, addFruits] = useState([]);

  const [fruitsOnCart, cart] = useState([]);

  const [finishVisible, setFinish] = useState(false);
	


  useEffect(() => {
    const fetchFruits = async () => {
			const {data} = await axios.get(
				"https://www.fruityvice.com/api/fruit/all"
			);
      addFruits(data);
		};

		fetchFruits();
  }, [])

  const addToCartClick = (fruitId) => {
		const check = fruits.map((fruit) => {
			if (fruit.id === fruitId){
        if (fruitsOnCart.includes(fruit)){
          fruit.quantidade++;
          alert("Adicionamos +1 no carrinho para você.")
        } else {
          const newCart = [
            ...fruitsOnCart,fruit 
          ]
          fruit.quantidade = 1;
          cart(newCart);
          finishOrder(newCart)
          alert("Item adicionado com sucesso")
        }  
      }
		});
    
    
	};

  const removeFruit = (fruitId) => {
		const newFruitsCart = fruitsOnCart.filter((fruit) => fruit.id !== fruitId);

		cart(newFruitsCart);
    finishOrder(newFruitsCart)
	};

  function finishOrder(fruitsOnCart) {
    if (fruitsOnCart.length > 0) {
      setFinish(true);
    } else {
      setFinish(false);
    }
  }

  function clearCart(){
  
    cart([]);
    finishOrder([]);
  }

  return (
    <Router>
      <Route
					path="/"
					exact
					render={() => (
						<>
							<div className="container">
                <HeaderHome fruitsOnCart={fruitsOnCart.length}/>
                <Location>Home</Location>
                <Feed fruits={fruits} addToCartClick={addToCartClick} />
              </div>
						</>
					)}
			/>
      <Route 
        path="/cart" 
        exact 
        render={() => (
          <>
            <div className="container">
              <HeaderCart />
              <Location>Carrinho</Location>
              {fruitsOnCart.length === 0 ? <ClearCart /> : null}
              <Cart fruitsOnCart={fruitsOnCart} removeFruit={removeFruit}/>
              <div className='buttons-on-cart'>
                {fruitsOnCart.length > 0  ? <button className='clear' onClick={clearCart}>impar carrinho</button> : null}
                {finishVisible ? <ButtonFinish fruitsOnCart={fruitsOnCart}/> : null}
              </div>
              
            </div>
          </>
      )}/>
      <Footer />
    </Router>
    
    
  )
}

export default App;
