import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'
import './App.css';

const Navbar = ({size}) => {
  return (
      <nav>
        <img src='./Furioussteel.png' height={70} width={120}/>
        <h2>Pratik's Demo Shop</h2>
        <div className='cart'>
          <span>
            <i className='fas fa-cart-plus' height={64} width={64}></i>
          </span>
          <span>{size}</span>
        </div>
      </nav>
  )
}

export default Navbar
