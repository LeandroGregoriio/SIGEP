import React, {useState} from "react";
import {Container, TelaLogin, Inputs, Mensagem, Text} from './style';
import Header from "../../components/Header";
import InputsLogin from "../../components/InputsLogin"
import { TextInput, StyleSheet, Alert } from "react-native";
import ButtonsLogin from "../../components/ButtonsLogin";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../config/firebase';



export default function CadastroUsuario(){

  

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nome, setNome] = useState("");

    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailV =  regex.test(email);
    console.log(emailV)

    
    const CriarUsuario=()=>{

      if (!!emailV) {
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    Alert.alert("Houve um erro, verifique se seus dados correspondem a todos os requisitos")
    // ..
  });
      }
      else {
        Alert.alert("Insira um email válido!")
      }
    }

      

    return(
        <Container>
            <Header/>
            <TelaLogin>
            <Mensagem>
            <Text>Criar Conta</Text>
            </Mensagem>
            <Inputs>
                <InputsLogin type="nome" 
                placeholder="Nome" 
                placeholderTextColor={"#808080"} 
                onChangeText={text=>(setNome(text))} />

                <InputsLogin type="email" 
                placeholder="Email" 
                placeholderTextColor={"#808080"} 
                keyboardType="email-address" 
                onChangeText={text=>(setEmail(text))} />

                <InputsLogin type="senha" 
                placeholder="Senha" 
                placeholderTextColor={"#808080"} 
                secureTextEntry={true} 
                onChangeText={text=>(setPassword(text))} />
                <ButtonsLogin type="Criar" onPress={CriarUsuario} />
            </Inputs>
            </TelaLogin>
        </Container>
    );
}
