import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'


function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        {/* <Route path='/bio' element={<Bio />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/resume' element={<Resume />}/>
        <Route path='/contact' element={<Contact />}/> */}
      </Routes>
    </>
  )
}

export default App
