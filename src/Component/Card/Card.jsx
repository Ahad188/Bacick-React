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
                    <span>Minit: {card.time} <FaBookmark onClick={()=>bookmark(card.title)}/></span>
               </div>
               </div>
               <h3>{card.title}</h3>
               <button href="" onClick={()=>handelMinit(card.time)}>Read More</button>
          </div>
     );
};

export default Card;