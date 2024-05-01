import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ContactPage from './pages/Contact/ContactPage'

import HomePage from './pages/Home/HomePage'
import Table from './pages/Table/Table'

function App() {  
 

  return (
    <React.Fragment>
     {/* <HomePage/> */}
     <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/contact/table' element={<Table/>}/>
      </Routes>
     </Router>
   </React.Fragment>
  )
}

export default App
