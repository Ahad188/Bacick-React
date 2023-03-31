import React from "react";
import { FaBookmark } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "./Card.css";
const Card = ({ card, handelMinit, bookmark }) => {
  // console.log(card)
  const tostMsg = () => {
    toast(" Yes you got it!");
  };
  return (
    <div className="cards">
      <img src={card.img} alt="" />
      <div className="parents">
        <div className="author-info">
          <img src={card.authorimg} alt="" />
          <div>
            <p>Name:{card.name}</p>
            <p>Date:{card.date}</p>
          </div>
        </div>
        <div>
          <span>
            Minit: {card.time}{" "}
            <FaBookmark title="Add to Book Mark" onClick={() => bookmark(card.title, card.id)} />
          </span>
        </div>
      </div>
      <h3>{card.title}</h3>
      <button
        onClick={() => {
          handelMinit(card.time);
          tostMsg();
        }}
      >
        Mark as read
      </button>
    </div>
  );
};

export default Card;
