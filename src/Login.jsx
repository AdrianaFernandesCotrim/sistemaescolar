import React from "react";
import { useState } from "react";

function login(){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [emailCerto, setemailCerto] = useState('adriana@gmail.com')
    const [senhaCerta, setSenhaCerta] = useState('12345')

    const handleEmail = (event) =>{
        
        setEmail(event.target.value)
        console.log(email)
    }

    const handleSenha = (event) =>{
        
        setSenha(event.target.value)
        console.log(senha)
    }

    function fazerLogin(){
        if (email===emailCerto && senha===senhaCerta){
            alert("Bem-vindo!")
        }
        else{
            alert('email ou senha inválidos')
        }
    }

        return(
            <>
            <label>Email: </label>
            <input
            type="email"
            value={email} 
            onChange={handleEmail}
            placeholder="Digite seu email"
            />
            
            <label htmlFor=""> Senha: </label>
            <input
            type="password"
            value={senha} 
            onChange={handleSenha}
            placeholder="Digite sua senha"
            />
            <button onClick={fazerLogin}>Login</button>
            </>
    
        )
    }

  


    
export default login

  
       //HTML
    //Tem que ter um input pra email, e um pra senha
    //javascript
    //preciso criar duas variáveis, uma pra email
    //uma pra senha
    //preciso de duas variaveis com o email certo e a senha certa
    //preciso de uma função pra pegar os valores dos inputs
    //preciso de uma função para comparar, se os valores
    //nos inputs, são iguais aos dados corretos





