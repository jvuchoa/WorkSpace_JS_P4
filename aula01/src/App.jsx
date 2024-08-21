import React from 'react'
import Adicao from './components/adicao'
import Multiplicacao from './components/Multiplicacao'
import Subtracao from './components/Subtracao'
import Divisao from './components/Divisao'
import PrecisoEstudar from './components/PrecisoEstudar'

const App = () => {
  return (
    <div>
      <Adicao num1={2} num2={2}/>
      <Multiplicacao num1={2} num2={2}/>
      <Subtracao num1={2} num2={2}/> 
      <Divisao num1={2} num2={2}/>
      <PrecisoEstudar nomeDaTecnologia = "Spring"/>
    </div>

    
  )
}

export default App