import React, { useEffect, useState } from 'react';
import './SideCard.css'


const SideCard = ({watchtiMe,book}) => {
      const [show,setShow] =useState(watchtiMe)
     useEffect(()=>{
          const showtime = localStorage.getItem('watchTime')
          setShow(showtime)
     },[watchtiMe]);

     const [p, setp] = useState(book)
     useEffect(()=>{
         const showD = JSON.parse(localStorage.getItem('Book'))
         setp(showD)
     },[book])
     console.log(p)
     
     
     return (
          <div className='side-card'>
              <h3>Spent time on read :{show} min</h3> 
               <h3>Bookmarked Blogs : {p.length}</h3>
               <div>
                    {
                         p.map(s=><h4>{s}</h4>)
                    }
               </div>
                
          </div>
     );
};

export default SideCard;