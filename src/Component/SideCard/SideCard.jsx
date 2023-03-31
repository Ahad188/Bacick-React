import React, { useEffect, useState } from 'react';
import './SideCard.css'


const SideCard = ({watchtiMe,book}) => {
      const [show,setShow] =useState(watchtiMe)
     useEffect(()=>{
          const showtime = localStorage.getItem('watchTime')
          setShow(showtime)
     },[watchtiMe]);

     const [post, setpost] = useState(book);
     useEffect(()=>{
          const ShowD = JSON.parse(localStorage.getItem('Book'))
          setpost(ShowD)
     },[book])

      
     
     
     return (
          <div className='side-card'>
              <h3>Spent time on read :{show} min</h3> 
               <h3>Bookmarked Blogs : {post.length}</h3>
               <div>
                     
                    {
                         post.map(p=> <h4>{p}</h4>)
                    }
               </div>
                
          </div>
     );
};

export default SideCard;