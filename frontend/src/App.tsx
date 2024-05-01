import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ContactPage from './pages/Contact/ContactPage'

import HomePage from './pages/Home/HomePage'

function App() {  
 

  return (
    <React.Fragment>
     {/* <HomePage/> */}
     <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
     </Router>
   </React.Fragment>
  )
}

export default App
