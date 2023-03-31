import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header/Header'
import Display from './Component/Display/Display'
import Question from './Component/Question/Question'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
 
  return (
    <div className="App">
      <Header/>
       <Display></Display>
      <Question/>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
