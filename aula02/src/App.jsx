import React from 'react'
import RenderizandoComFuncoes from './components/RenderizandoComFuncoes'
import TrabalhandoComImagens from './components/TrabalhandoComImagens'
import HooksContador from './components/HooksContador'
import HookMegaSena from './components/HookMegaSena'

const App = () => {
  return (
    <div>
      <HookMegaSena/>
      <HooksContador/>
      <RenderizandoComFuncoes/>
      
      <TrabalhandoComImagens />
      
    </div>
  )
}

export default App