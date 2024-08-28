import React from 'react'
import Mengo from '../assets/mengo.png'
const TrabalhandoComImagens = () => {
  return (
    <div>
        <h2>Img publica </h2>
        <img src = "image.png" alt="" />
        <h2>FLAMENGO!</h2>
        <img src = {Mengo} alt=""/>
    </div>
  )
}

export default TrabalhandoComImagens