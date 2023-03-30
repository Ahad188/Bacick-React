import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header/Header'
import Display from './Component/Display/Display'

function App() {
//   const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
       <Display></Display>
    </div>
  )
}

export default App
