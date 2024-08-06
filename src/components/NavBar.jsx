import { Link } from "react-router-dom"
import { useState } from "react"

import './NavBar.css'

const NavBar = () => {

  const [clicked, setClicked] = useState(false)

  function handleClick(e) {
    if(clicked) {
      setClicked(false)
      e.target.src = 'public/icon-hamburger.svg'
    }else {
      setClicked(true)
      e.target.src = 'public/icon-close.svg'
    }
  }

  return (
    <nav>
        <div className="brand-logo">
            <img src="/logo-white.png" alt="Logo" />
        </div>
        <div className="line"></div>
        <img id="mobile-icon" onClick={(e) => handleClick(e)} src="public/icon-hamburger.svg" alt="Mobile Menu" />
        <div className="nav-links" style={clicked ? {display: 'flex'} : {}}>
            <Link to="/">
              <p><span>00</span> Home</p>
            </Link>
            <Link to="/plans">
              <p><span>01</span> Planos</p>
            </Link>
            <Link to="/services">
              <p><span>02</span> Serviços</p>
            </Link>
            <Link to="/contacts">
              <p><span>03</span> Contato</p>
            </Link>
        </div>
    </nav>
  )
}

export default NavBar