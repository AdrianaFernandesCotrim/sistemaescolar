import React from "react";
import {useState} from "react";

function InputValor(){
const [valor, setValor] = useState("")

const handleChange = (event) => {
    setValor(event.target.value)
    console.log(valor)
}
return(
<>
<div>
<input
type="text"
value={valor}
onChange={handleChange}
placeholder="Digite algo"/>
</div>
</>
)
}
export default InputValor
