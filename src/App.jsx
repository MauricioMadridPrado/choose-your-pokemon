import React from "react";
import Botoes from "./Botoes";
import Produto from "./Pokemon";

const App = () => {
  const [dados, setDados] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  const pokemons = [
    {
      nome: "charmander",
    },
    {
      nome: "bulbasaur",
    },
    {
      nome: "squirtle",
    },
    {
      nome: "pikachu",
    },
    {
      nome: "growlithe",
    },
    
    {
      nome: "meowth",
    },
    {
      nome: "weezing",
    },
    {
      nome: "mewtwo",
    },
    
    {
      nome: "togepi",
    }
  ];
  async function handleClick(event) {
    setLoading(true);
    const poke = event.target.innerText;
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`);
    const data1 = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
    const dataJson = await data.json();
    console.log(data1)
      setDados(dataJson);
    setLoading(false);
  }

  return (
    <>
      <h1>Escolha seu pokemon inicial!</h1>
      <div style={{padding:"3rem",display:"flex", width: "600px", overflowY: "scroll" }}>
        {pokemons.map(({ nome }) => (
          <Botoes key={nome} id={nome} onClick={handleClick} nome={nome} />
        ))}

      </div>

      <section>
        {loading && <p>Carregando...</p>}
        {!loading && dados && <Produto dados={dados} />}
      </section>
    </>
  );
};
export default App;
