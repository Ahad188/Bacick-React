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
    const [watchtiMe, setwatchtiMe] =useState('');
 const handelMinit =(time)=>{
      const previewsTime = JSON.parse(localStorage.getItem('watchTime'))
      if(previewsTime){
          const sum = previewsTime + time;
          localStorage.setItem('watchTime',sum)
          setwatchtiMe(sum)
      }else{
          localStorage.setItem('watchTime',time)
          setwatchtiMe(time)
      }
 }
      




     return (
          <div className='parent'>
              <div className="left-side">
               {
                    Data.map(card=><Card card={card} key={card.id} handelMinit={handelMinit} ></Card>)
               }
              </div>
              <div className="right-side">
               <SideCard watchtiMe={watchtiMe} ></SideCard>
              </div>
          </div>
     );
};

export default Display;