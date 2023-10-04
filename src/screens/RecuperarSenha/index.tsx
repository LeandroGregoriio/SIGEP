import React, { useState } from "react";
import {Container, Mensagem, Inputs, Text} from './style';
import Header from "../../components/Header";
import InputsLogin from "../../components/InputsLogin";
import ButtonEnviarEmail from '../../components/ButtonEnviarEmail'
import { FirebaseApp } from "firebase/app";
import { auth } from "../../config/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { error } from "console";


export default function RecuperarSenha ({navigation}:any){

  const [email, setEmail] = useState("");

  function resetPassword(){
    sendPasswordResetEmail(auth, email)
    .then(()=>{
      alert('Email enviado com sucesso!')
    })
    .catch(error=>{
      alert("Erro ao enviar email!")
      console.log(error)
    })
  }


    return(
        <Container>
          <Header/>
     
            <Text>Recuperar Senha</Text>
            <Mensagem>Digite o email cadastrado para recuperação de senha</Mensagem>
            <Inputs>
            <InputsLogin type="email" 
            placeholder="Email"
            onChangeText={(text)=>setEmail(text)}
            value={email}
            />
            </Inputs>
            <ButtonEnviarEmail type="Enviar email" onPress={resetPassword} />
        </Container>
    );
}

