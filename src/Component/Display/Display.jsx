import React from 'react';
import './Display.css'
import { useState } from 'react';
import { useEffect } from 'react';
import Card from '../Card/Card';
import SideCard from '../SideCard/SideCard';
const Display = () => {
     const [Data, setData] = useState([]);
     useEffect(()=>{
          fetch('Data.json')
          .then(res=>res.json())
          .then(data => setData(data))
     },[]);
     const [Time, setTime] = useState('');

     const handelMinit =(min)=>{
          const previesTime = JSON.parse(localStorage.getItem('watch'))
          if(previesTime){
               const sum = previesTime + min;
               localStorage.setItem('watch',sum)
               setTime(sum)
          }else{
               localStorage.setItem('watch',min)
               setTime(min)
          }
     };




     return (
          <div className='parent'>
              <div className="left-side">
               {
                    Data.map(card=><Card card={card} key={card.id} handelMinit={handelMinit}></Card>)
               }
              </div>
              <div className="right-side">
               <SideCard time={Time}></SideCard>
              </div>
          </div>
     );
};

export default Display;