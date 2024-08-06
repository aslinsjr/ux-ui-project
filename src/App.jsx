import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import Home from './components/Home'
import Accessibility from './components/Accessibility'
import Contacts from './components/Contacts'
import Plans from './components/Plans'
import Services from './components/Services'
import ContactButton from './components/ContactButton'


import './App.css'


function App() {

  const [fontSizeAccess, setFontSizeAccess] = useState(16)
  const [fontWeightAccess, setFontWeightAccess] = useState(400)

  function handleClick() {

    const accessBtn = document.querySelector(".accessibility-container")

    accessBtn.classList.toggle("open")

  }


  function handleAccessibility(e) {

    if(e.target.id === 'zoom-in') {
      setFontSizeAccess(fontSizeAccess + 4)
    }

    if(e.target.id === 'zoom-out') {
      setFontSizeAccess(fontSizeAccess - 4)
    }

    if(e.target.id === 'bolder') {
      setFontWeightAccess(fontWeightAccess + 200)
    }

    if(e.target.id === 'reset') {
      setFontWeightAccess(400)
      setFontSizeAccess(16)
    }
  }


  return (
    <Router>
      <div className="app" style={{fontSize: fontSizeAccess + "px", fontWeight: fontWeightAccess}}>
        <NavBar />
        <Routes>
          <Route path="/plans" element={<Plans />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contacts" element={<Contacts/>} />
          <Route path="/" element={<Home />} />
        </Routes>
        <ContactButton />
        <Accessibility handleClick={handleClick} handleAccessibility={handleAccessibility} />
        <img id='background' src="./background.jpeg" alt="" />
      </div>
    </Router>
  )
}

export default App
