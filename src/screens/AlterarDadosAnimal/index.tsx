import React, {useState} from "react";
import {Container, TelaLogin, Inputs, Mensagem, Text, Title} from './style';
import Header from "../../components/Header";
import ButtonsLogin from "../../components/ButtonsLogin";
import { getStorage, ref } from "firebase/storage";
import { Alert } from "react-native";
import InputCadastroAnimal from "../../components/InputCadastroAnimal";
import ButtonUpload from "../../components/ButtonUpload";
import Calendario from "../../components/Calendario";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { AntDesign } from '@expo/vector-icons';
import  SelectDropdownProps  from "react-native-select-dropdown";
import { getFirestore, updateDoc, doc } from "firebase/firestore";
import {app} from '../../config/firebase';
import Loading from "../../components/Loading";
import InputAnotacaoAnimal from "../../components/InputAnotacaoAnimal";




export default function CadastroAnimal({route, navigation}:any){

    const { Ppeso, Pcategoria, PdataNascimento, Pbrinco, Pid, Panotacao } = route.params;
    console.log(Pid, Panotacao);

    const db = getFirestore(app);

    const [brinco, setBrinco] = useState(Pbrinco);
    const [categoria, setCategoria] = useState(Pcategoria);
    const [dataNascimento, setDataNascimento] = useState("");
    const [peso, setPeso] = useState(Ppeso);
    const [anotacao, setAnotacao] = useState(Panotacao);
    const Categorias = ["Vaca", "Bezerro", "Novilha", "Touro"]

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

    async function AlterarDados(){


      setLoading(true);
      try {
        const docRef = doc(db, "AnimaisAtivos", Pid);
        await updateDoc(docRef, {
            brinco:brinco,
            dataNascimento: dataNascimento,
            peso:peso,
            categoria: categoria,
            anotacao: anotacao
        })
        setLoading(false);
        alert("Dados atualizados com sucesso!")
        navigation.navigate("PerfilAnimal", {Pbrinco:brinco, Ppeso: peso, Pcategoria:categoria, PdataNascimento:dataNascimento, Panotacao:anotacao, Pid:Pid } )
      } catch (e) {
        console.error("Error adding document: ", e);
        setLoading(false);
      }
    }

    return(

      <TouchableWithoutFeedback
      onPress={Keyboard.dismiss} accessible={false}>
      
        <Container>
          
            <Header/>
            <TelaLogin >
            <Mensagem>
            <Title>Atualizar Dados</Title>
            </Mensagem>
            
            <Inputs>
            
                <InputCadastroAnimal type="text" 
                placeholder={'Brinco'}
                value={brinco}
                placeholderTextColor={"#808080"} 
                onChangeText={text=>(setBrinco(text))}
                />

                <SelectDropdownProps data={Categorias}
                onSelect={(selectedItem) => {
                  setCategoria(selectedItem);
                }}

        
                buttonTextAfterSelection={(selectedItem) => {

                  return selectedItem
                }}
                rowTextForSelection={(item) => {

                  return item
                }}
                buttonStyle={{backgroundColor:'#ffffff', borderRadius:20, width:120, height:60, shadowColor:' #272727', shadowOpacity:100, alignItems:'center', alignContent:'center', alignSelf:"center" }} 

                dropdownStyle={{backgroundColor:'white', borderRadius:20}}

                defaultButtonText={Pcategoria}

                renderDropdownIcon={isOpened => {
                  return <AntDesign name="down" size={24} color="black" />;
                }}


                buttonTextStyle={{ fontSize:15, color:'#1b1b1b' }}
                searchPlaceHolder={('Categoria')}
                
/>

                <InputCadastroAnimal type="number" 
                placeholder="Peso" 
                placeholderTextColor={"#808080"} 
                keyboardType="number-pad"
                value={peso}
                onChangeText={text=>(setPeso(text))}/>

                

                <Loading visible={loading} />
                
                <InputAnotacaoAnimal 
                placeholder="Anotação"
                value={anotacao}
                placeholderTextColor={"#808080"} 
                onChangeText={text=>(setAnotacao(text))}
                />
                {/*<ButtonUpload onPress={EscolheFoto}/>*/}
                
            </Inputs>

            <Calendario onDayPress={day => {
        setDataNascimento(day.dateString);
      }}
      markedDates={{
        [dataNascimento]: {selected: true, disableTouchEvent: true, selectedColor: '#1CA7A6'}
      }}/>
            { brinco != "" && dataNascimento != "" && peso != "" && categoria != "" 
            
            ? <ButtonsLogin type="Alterar" onPress={AlterarDados} />
            : <Text> Preencha todos os campos!</Text>

            }
            </TelaLogin>
            
        </Container>
        </TouchableWithoutFeedback>
    );
    
}
