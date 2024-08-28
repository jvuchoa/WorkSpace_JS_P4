import React from 'react'
import RenderizandoComFuncoes from './components/RenderizandoComFuncoes'
import TrabalhandoComImagens from './components/TrabalhandoComImagens'
import HooksContador from './components/HooksContador'

const App = () => {
  return (
    <div>
      <RenderizandoComFuncoes/>
      
      <TrabalhandoComImagens />
      <HooksContador/>
    </div>
  )
}

export default App