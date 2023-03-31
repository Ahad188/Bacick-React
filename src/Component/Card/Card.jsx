import React from 'react';
import { FaBookmark } from "react-icons/fa";
import './Card.css'
const Card = ({card,handelMinit,bookmark}) => {
     // console.log(card)
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
                    <span>Minit: {card.time} <FaBookmark title='Add to Book Mark' onClick={()=>bookmark(card.title,card.id)} /></span>
               </div>
               </div>
               <h3>{card.title}</h3>
               <button onClick={()=>handelMinit(card.time)}>Mark as read</button>
          </div>
     );
};

export default Card;