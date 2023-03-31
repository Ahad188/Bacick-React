import React, { useEffect, useState } from 'react';
import './SideCard.css'


const SideCard = ({watchtiMe}) => {
      const [show,setShow] =useState(watchtiMe)
     useEffect(()=>{
          const showtime = localStorage.getItem('watchTime')
          setShow(showtime)
     },[watchtiMe])
     
     return (
          <div className='side-card'>
              <h3>Spent time on read :{show} min</h3> 
          </div>
     );
};

export default SideCard;