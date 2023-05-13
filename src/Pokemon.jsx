import React from "react";

const Produto = ({ dados }) => {

  return (
    <div style={{textAlign:"center",marginTop:"2rem",border:"solid black 1px", padding:"0.75em 2em"}} >
      <h1>Nome: {dados.name}</h1>
      <h3>Id: {dados.id}</h3>
      <h3>Tipo: {dados.types[0].type.name}</h3>
      <ul style={{listStyle:"none"}}>
        <li><h3>Principais habilidades</h3></li>
        <li style={{marginLeft:"1rem"}}>{dados.abilities[0].ability.name}</li>
        <li style={{marginLeft:"1rem"}}>{dados.abilities[1].ability.name}</li>
      </ul>
      <img style={{width:"300px"}} src={dados.sprites.front_default} />
    </div>
  );
};

export default Produto;
