import { useState } from 'react'
import './App.css'
import Me from './Components/Me/Me'
import Navbar from './Components/Navbar/Navbar'
import { grid } from './assets/export'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='pattern'></div>
      <div class="gradient"></div>
      {/* <div className="grid">
        <img src={grid} alt="" />
      </div> */}
      <Navbar/>
      <Me/>
    </div>
  )
}

export default App
