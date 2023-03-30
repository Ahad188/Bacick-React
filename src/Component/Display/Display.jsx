import React from 'react';
import './Display.css'
import { useState } from 'react';
import { useEffect } from 'react';
import Card from '../Card/Card';
const Display = () => {
     const [Data, setData] = useState([]);
     useEffect(()=>{
          fetch('Data.json')
          .then(res=>res.json())
          .then(data => setData(data))
     },[])
     return (
          <div className='parent'>
              <div className="left-side">
               {
                    Data.map(card=><Card card={card} key={card.id}></Card>)
               }
              </div>
              <div className="right-side"></div>
          </div>
     );
};

export default Display;