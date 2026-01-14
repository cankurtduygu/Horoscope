import React from 'react'
import "./Card.scss"

const Card = ({data}) => {
    
  return (
    <>
    <div className='card'>  
        {data.map((item)=>(
            <div className='card__item' key={item.id}>
                <h2 className='card__item__title'>{item.title}</h2>
                <div className='card__item__img' 
                style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '500px' }}>
                </div>
                <p className='card__item__date'>{item.date}</p>
                
                <p className='card__item__desc'>{item.desc}</p>
            </div>
        ))}
    </div>
   
    </>
    
  )
}

export default Card