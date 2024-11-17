import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'
import './App.css';
import Navbar from './Navbar';
import Description from './Description';
import Shop from './Shop';

const App = () => {
  const [cart, setCart] = useState([]);
  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if(item.id === product.id)
        isPresent = true;
    })
    if(isPresent)
      console.log('Item already present');
    setCart([...cart,item])
  }

  return (
    <div>
      <Navbar size={cart.length}/>
      <Description/>
      <Shop handleClick={handleClick}/>
    </div>
  )
}

export default App

