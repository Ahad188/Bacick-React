import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header/Header'
import Display from './Component/Display/Display'
import Question from './Component/Question/Question'

function App() {
 
  return (
    <div className="App">
      <Header/>
       <Display></Display>
      <Question/>
    </div>
  )
}

export default App
