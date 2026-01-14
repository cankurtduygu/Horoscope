import React from 'react'
import "./Card.scss"

const Card = ({data}) => {
    
  return (
    <>
    <div className='card'>  
        {data.map((item)=>(
            <div className='card__item' key={item.id}>
                <h2 className='card__item__name'>{item.title}</h2>
                <img className='card__item__img' src={item.image} alt=""/>
                
                <p className='card__item__desc'>{item.desc}</p>
            </div>
        ))}
    </div>
   
    </>
    
  )
}

export default Card