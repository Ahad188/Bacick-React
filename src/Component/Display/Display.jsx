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

     const [book, setBook] = useState([])
 const bookmark =(title, id)=>{
     console.log(title , id)
     let NewBook = [];
     const prevBook = JSON.parse(localStorage.getItem('Book'))
     if(prevBook && prevBook.length >0){
          NewBook.push(...prevBook,title)
          setBook(NewBook)
     }else{
          NewBook.push(title)
          setBook(title)
     }
     localStorage.setItem('Book',JSON.stringify(NewBook))
 }
    
     

     return (
          <div className='parent'>
              <div className="left-side">
               {
                    Data.map(card=><Card
                          card={card} 
                          key={card.id}
                           handelMinit={handelMinit}
                            bookmark={bookmark}
                          ></Card>)
               }
              </div>
              <div className="right-side">
               <SideCard watchtiMe={watchtiMe} book={book}  ></SideCard>
              </div>
          </div>
     );
};

export default Display;