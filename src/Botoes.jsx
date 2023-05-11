import React from 'react'

const Botoes = ({nome, onClick}) => {

  return (
    <button key={nome} style={{marginLeft:'1em'}} onClick={onClick}>
      {nome}
    </button>
  )
}

export default Botoes
