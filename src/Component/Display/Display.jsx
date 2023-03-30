import React from 'react';
import './Display.css'
import { useState } from 'react';
import { useEffect } from 'react';
const Display = () => {
     const [Data, setData] = useState([]);
     useEffect(()=>{
          fetch('Data.json')
          .then(res=>res.json())
          .then(data => console.log(data))
     },[])
     return (
          <div className='parent'>
              <div className="left-side"></div>
              <div className="right-side"></div>
          </div>
     );
};

export default Display;