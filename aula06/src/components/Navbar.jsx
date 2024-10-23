import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <Link to="/">Inicial</Link><br />
        <Link to="/Faculdade">Faculdade</Link><br />
        <Link to="/Noticias">Noticias</Link><br />
        <Link to="/Dpo_lgpd">Dpo_lgpd</Link><br />


    </nav>
  )
}

export default Navbar