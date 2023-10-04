import React, { useEffect, useState } from 'react';
import { Container, Logo, Buttons, Header, Sigep} from './style';
import ButtonsLogin from '../../components/ButtonsLogin';
import Bemvindo from '../../components/Bemvindo';

import { getAuth, onAuthStateChanged } from "firebase/auth";



export default function TelaInicial({navigation}:any){

    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },2000)
        const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        navigation.navigate("Home", { idUser:user.uid } );
      }
    });
    },[])

    return(
        
        <Container colors={([])}>
            
            <Header>
            <Logo source={require('../../assets/SIGEPB.png')} style={{width: 130, height: 80}} />
            <Sigep>SIGEP</Sigep>
            </Header>
            <Buttons>
                <ButtonsLogin type='Entrar' onPress={()=>navigation.navigate('Login')} />
                <ButtonsLogin type='Cadastrar' onPress={()=>navigation.navigate('CadastroUsuario')}  />
            </Buttons>
            <Bemvindo visible={loading} />
        </Container>
    )
}