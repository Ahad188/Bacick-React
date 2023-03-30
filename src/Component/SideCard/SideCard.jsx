import React, { useEffect, useState } from 'react';
import './SideCard.css'


const SideCard = ({Time}) => {
     const [min, setMin] = useState('Time');
     useEffect(()=>{
          const showStoreg = localStorage.getItem('watch')
          setMin(showStoreg)
      },[Time])
     
     return (
          <div>
              <h3>Spent time on read : {min}min</h3> 
          </div>
     );
};

export default SideCard;