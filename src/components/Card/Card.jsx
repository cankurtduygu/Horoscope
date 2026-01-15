import React from 'react'
import "./Card.scss"

const Card = ({id, title, desc, image, date}) => {
    
  return (
    <>
    
        
            <div className='card__item' key={id}>
                <h2 className='card__item__title'>{title}</h2>
                <div className='card__item__img' 
                style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '500px' }}>
                </div>
                <p className='card__item__date'>{date}</p>
                
                <p className='card__item__desc'>{desc}</p>
            </div>
        
 
   
    </>
    
  )
}

export default Card