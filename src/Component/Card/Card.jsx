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
                    <h3>name:{card.name}</h3>
                    <h4>Date:{card.date}</h4>
                    </p>
               </div>
               <div>
                    <h2>Minit: {card.time}</h2>
               </div>
               </div>
               <h3>{card.title}</h3>
               <a href="">Read More</a>
          </div>
     );
};

export default Card;