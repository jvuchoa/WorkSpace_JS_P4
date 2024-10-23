import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Inicial from './pages/Inicial'
import Dpo_lgpd from './pages/Dpo_lgpd'
import Noticias from './pages/Noticias'
import Faculdade from './pages/Faculdade'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <br />
      <Routes>
        <Route path='/' element={<Inicial/>}/>
        <Route path='/faculdade' element={<Faculdade/>}/>
        <Route path='/Dpo_lgpd' element={<Dpo_lgpd/>}/>
        <Route path='/noticias' element={<Noticias/>}/>

      </Routes>
    
    </BrowserRouter>
  )
}

export default App