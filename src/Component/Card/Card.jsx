import React from 'react';
import './Card.css'
const Card = ({card}) => {
     console.log(card)
     return (
          <div className='cards'>
               <img src={card.img} alt="" />
               <div className="parents">
               <div className="author-info">
                    <img src={card.authorimg} alt="" />
                    <p>
                    <p>name:{card.name}</p>
                    <p>Date:{card.date}</p>
                    </p>
               </div>
               <div>
                    <span>Minit: {card.time}</span>
               </div>
               </div>
               <h3>{card.title}</h3>
               <a href="">Read More</a>
          </div>
     );
};

export default Card;