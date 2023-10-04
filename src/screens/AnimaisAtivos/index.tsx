import React, {useEffect, useState} from "react";
import {Container, Ativos, Mensagem, Title, Lista} from './style';
import Header from "../../components/Header";
import AnimalCards from "../../components/AnimalCards";


import ButtonsCadastrarAnimal from '../../components/ButtonsCadastrarAnimal';

import { collection, getFirestore, onSnapshot } from "firebase/firestore"; 


import {app} from '../../config/firebase';



  export default function AnimaisAtivos({navigation}:any){

    function CadastroAnimal(){
      navigation.navigate("CadastroAnimal");
    }

    

    const db = getFirestore(app);
    const [animais, setAnimais] = useState();
  
    useEffect(() => {

      const colRef = collection(db, "AnimaisAtivos")
        onSnapshot(colRef, (QuerySnapshot) => {
            const ativos:any = []
            QuerySnapshot.forEach((doc) => {
                const {brinco, peso, categoria, dataNascimento, anotacao} = doc.data()
                 ativos.push({
                    id: doc.id,
                    brinco, 
                    peso, 
                    categoria,
                    dataNascimento,
                    anotacao
                })
            })
            setAnimais(ativos);
        })

    }, []);
  

    return(
      
        <Container>
          
            <Header/>
            <Ativos >
            <Mensagem>
            <Title>Animais Ativos</Title>
            </Mensagem>
            <Lista
            showsVerticalScrollIndicator={false}
              data={animais}
              keyExtractor={(item:any)=>item.id}
              renderItem={({item}:any)=>
              <AnimalCards data={item} onPress={()=>navigation.navigate('PerfilAnimal', {Pbrinco:item.brinco, Ppeso: item.peso, Pcategoria:item.categoria, Pid:item.id, PdataNascimento:item.dataNascimento, Panotacao:item.anotacao })}/> }       
              />
            <ButtonsCadastrarAnimal type='Cadastrar animal' onPress={CadastroAnimal}/>
            </Ativos>
            
        </Container>
    );
    
}
