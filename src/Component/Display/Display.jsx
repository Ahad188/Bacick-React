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


     const [book,setBook] = useState([]);

      const bookmark =(id)=>{
          // console.log(id)
          let Newbook =[];
          const previewsBook = JSON.parse(localStorage.getItem('Book'))
          if(previewsBook && previewsBook.length >0){
                Newbook.push(...previewsBook,id)
                setBook(Newbook)
          }else{
                Newbook.push(id)
                setBook(id)
          }
          localStorage.setItem('Book',JSON.stringify(Newbook))
          
      }
     //  console.log(book)




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
               <SideCard watchtiMe={watchtiMe} book={book} ></SideCard>
              </div>
          </div>
     );
};

export default Display;