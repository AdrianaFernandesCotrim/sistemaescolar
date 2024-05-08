import React from "react";
import cores from './cores.jpg'
import "./App.css"
import { useState } from "react";
// import Contador from "./Contador";
// import Inputvalor from "./Input";
import Login from "./Login";


function Home(){

  const [mensagem, setMensagem] = useState('')

  function handleClick(){
    setMensagem('O botão foi clicado!')
  }

  return(
    <>
    <Login/>

    {/*<Inputvalor/>
    <Contador/>
    <h1>Hello World! Jesus te ama!</h1>

    <button onClick= {handleClick}>Contador</button>


    <p>{mensagem}</p>
    <button onClick={handleClick}></button>
  <img src={cores} alt=""/>*/}
    </>
  )
}
export default Home


