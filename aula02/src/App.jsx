import React from 'react'
import RenderizandoComFuncoes from './components/RenderizandoComFuncoes'
import TrabalhandoComImagens from './components/TrabalhandoComImagens'
import HooksContador from './components/HooksContador'

const App = () => {
  return (
    <div>
      <HooksContador/>
      <RenderizandoComFuncoes/>
      
      <TrabalhandoComImagens />
      
    </div>
  )
}

export default App