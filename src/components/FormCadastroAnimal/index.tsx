import React, {useEffect, useState} from "react";
import {Container, Inputs, Text} from './style';
import Header from "../../components/Header";
import ButtonsLogin from "../../components/ButtonsLogin";
import { getStorage, ref } from "firebase/storage";
import { StyleSheet, Alert } from "react-native";
import InputCadastroAnimal from "../../components/InputCadastroAnimal";
import ButtonUpload from "../../components/ButtonUpload";

import * as ImagePicker from 'expo-image-picker';


import { AntDesign } from '@expo/vector-icons';

import  SelectDropdownProps  from "react-native-select-dropdown";

import { collection, addDoc, getFirestore, onSnapshot, QuerySnapshot } from "firebase/firestore";
import {app} from '../../config/firebase';

import Loading from "../../components/Loading";




export default function FormCadastroAnimal({navigation}:any){

    const db = getFirestore(app);

    const [brinco, setBrinco] = useState("");
    const [categoria, setCategoria] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [peso, setPeso] = useState("");
    const Categorias = ["Vaca", "Bezerro", "Novilha", "Touro"]
    const [selecionarImagem, setSelecionarImagem] = useState('');

    const [loading, setLoading] = useState(false);

    const [fotoEscolhida, setFotoEscolhida] = useState('');
    


    function salvarFotos(){
      const storage = getStorage();
     ref (storage, `fotosAnimais/${fotoEscolhida}`)
    }

    const EscolheFoto = async ()=>{
      
      const result = await ImagePicker.launchImageLibraryAsync({
                  allowsEditing: true,
                  aspect: [4, 3],
                  quality: 1,
                  base64:true,
      });
      //setFotoEscolhida(result.assets[0].uri);
      console.log(fotoEscolhida);
      salvarFotos();
    }

    async function AddAnimal(){


      setLoading(true);
      try {
        const docRef = await addDoc(collection(db, "AnimaisAtivos"), {
        brinco,
        categoria,
        dataNascimento,
        peso
        });
        Alert.alert("Animal Cadastrado com sucesso!")
        console.log("Document written with ID: ", docRef.id);
        setLoading(false);
        navigation.navigate("Home");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }

    return(
      
        <Container>
          
            
            <Inputs>
            
                <InputCadastroAnimal type="text" 
                placeholder="Brinco" 
                onChangeText={text=>(setBrinco(text))}/>

                <SelectDropdownProps data={Categorias}
                onSelect={(selectedItem, index) => {
                  setCategoria(selectedItem);
                }}

        
                buttonTextAfterSelection={(selectedItem, index) => {

                  return selectedItem
                }}
                rowTextForSelection={(item, index) => {

                  return item
                }}
                buttonStyle={{backgroundColor:'#ffffff', borderRadius:20, width:160, height:60, shadowColor:' #272727', shadowOpacity:100, alignItems:'center', alignContent:'center', alignSelf:"center" }} 

                dropdownStyle={{backgroundColor:'white', borderRadius:20}}

                defaultButtonText={('Categoria')}

                renderDropdownIcon={isOpened => {
                  return <AntDesign name="down" size={24} color="black" />;
                }}


                buttonTextStyle={{ fontSize:15, color:'#1b1b1b' }}

                searchPlaceHolder={('Categoria')}
                
/>

                <InputCadastroAnimal type="date" 
                placeholder="Data de Nascimento" 
                onChangeText={text=>(setDataNascimento(text))} />

                <InputCadastroAnimal type="number" 
                placeholder="Peso" 
                keyboardType="number-pad"
                onChangeText={text=>(setPeso(text))}/>

                <Loading visible={loading} />

                <ButtonUpload onPress={EscolheFoto}/>

            { brinco != "" && dataNascimento != "" && peso != "" && categoria != "" 
            
            ? <ButtonsLogin type="Criar" onPress={AddAnimal} />
            : <Text> Preencha todos os campos!</Text>

            }

                
            </Inputs>
            
        </Container>
    );
    
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
});

