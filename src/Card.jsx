import React from 'react'

const Card = ({item,handleClick}) => {
  return (
    <div className='grid-items'>
        <div className='d-block'>
      <img src={item.img}/>
      <p>{item.productName}</p>
      <button onClick={()=>handleClick(item)}>{item.btnContent} - {item.price}</button>
      </div>
    </div>
  )
}

export default Card
