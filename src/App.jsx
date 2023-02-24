import { useState } from 'react'
import './App.css'
import Me from './Components/Me/Me'
import Navbar from './Components/Navbar/Navbar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="grid"></div>
      <Navbar/>
      <Me/>
    </div>
  )
}

export default App
