import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './component2/class/Navbar'
import UserApp from './component2/class/UserApp'


function App() {
  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/userApp' element={<UserApp/>}/>
      </Routes>
    </Router>

  )
}

export default App