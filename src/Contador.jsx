import React from "react";
import { useState } from "react";

function Contador (){
    const [count, setCount] = useState(0)

    function handleClick(){
        setCount(count + 1)
    }
    return(
        <>
        <p>O botão foi apertado {count}</p>
        <button onClick={handleClick}>Adicionar</button>
        </>

    )
    

}

export default Contador


