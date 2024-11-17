import React from 'react'
import Card from './Card';
import items from './items'
const Shop = ({handleClick}) => {
  return (
    <section className='shop-container'>
      <h1>Items available in our stock</h1>
      <div className='shop-grid'>
        {items.map((item) => {
          return <Card item={item} key={item.id} handleClick={handleClick}/>
        })}
      </div>
    </section>
  )
}

export default Shop;
