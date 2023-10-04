import React, { useState } from "react";
import {Container, TelaLogin, Cumprimento, Inputs, Mensagem, Text} from './style';
import Header from "../../components/Header";
import InputsLogin from "../../components/InputsLogin"
import ButtonsLogin from "../../components/ButtonsLogin";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../config/firebase';
import { Keyboard } from "react-native";
import ButtonRecuperarSenha from "../../components/ButtonRecuperarSenha";
import { StackRoutes } from "../../routes/stack.routes";

import { Alert } from "react-native";

export default function Login ({navigation}:any){


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorLogin, setErrorLogin] = useState(false);

    const handleLogin = ()=> {
    Keyboard.dismiss();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
  
    const user = userCredential.user;
    navigation.navigate("Home",{ idUser: user.uid })
  })

  .catch((error) => {
    setErrorLogin(true);
    const errorMessage = error.message;
    console.log(errorMessage);
    Alert.alert('Usuario ou senha incorretos!')
  });

  
    }


    return(
        <Container>
          <Header/>
            <TelaLogin>
            <Mensagem>
            <Cumprimento>Boa tarde!</Cumprimento>
            <Text>Seja Bem vindo!</Text>
            </Mensagem>
            <Inputs>
                <InputsLogin type="email" 
                placeholder="Email" 
                placeholderTextColor={"#808080"} 
                onChangeText={(text)=>setEmail(text)}
                value={email}
                />
                <InputsLogin type="senha" 
                placeholder="Senha" 
                placeholderTextColor={"#808080"} 
                secureTextEntry={true} 
                onChangeText={(text)=>setPassword(text)}
                value={password}
                />
                <ButtonsLogin type="Entrar" onPress={handleLogin} />
                <ButtonRecuperarSenha title="Esqueci minha senha" onPress={()=>navigation.navigate('RecuperarSenha')}/>
            </Inputs>
            </TelaLogin>
        </Container>
    );
}

