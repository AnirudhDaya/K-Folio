import './App.css'
import Me from './Components/Me/Me'
import Navbar from './Components/Navbar/Navbar'
// import { grid } from './assets/export'
import AboutMe from './Components/AboutMe/AboutMe'
import Project from './Components/Project/Project'

import { Route, Routes } from 'react-router-dom'
import CommingSoon from './Components/CommingSoon/CommingSoon'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <div className='pattern'></div> */}
      <div class="gradient"></div>
      {/* <div className="grid">
        <img src={grid} alt="" />
      </div> */}
      <Navbar/>
      <Routes>
        <Route path = '/' element={<Me/>}/>
        <Route path = '/AboutMe' element={<AboutMe/>}/>
        <Route path = '/project' element={<Project/>}/>
        <Route path='/commingSoon' element={<CommingSoon/>}/>
      </Routes>
      

      

    </div>
  )
}

export default App
