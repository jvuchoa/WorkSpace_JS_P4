import React from 'react'

const RenderizandoComFuncoes = () => {

    function escolhaDeRenderizacao
    (oQuerenderizar){
        if(oQuerenderizar === "h1"){
            return <h1>Texto em h1</h1>
            } else {
                return <h2>Texto em h2</h2>
            }
    }

  return (
    <div>
        {escolhaDeRenderizacao("teste")}
        {escolhaDeRenderizacao("h1")} 
    </div>
  )
}

export default RenderizandoComFuncoes