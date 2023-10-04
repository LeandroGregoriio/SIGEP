import React, {useEffect, useState} from "react";
import {Container, TelaLogin, Inputs, Mensagem, Text, Title} from './style';
import Header from "../../components/Header";
import ButtonsLogin from "../../components/ButtonsLogin";
import { StyleSheet, Alert } from "react-native";
import InputFinanceiro from "../../components/InputFinanceiro";
import { AntDesign } from '@expo/vector-icons';
import  SelectDropdownProps  from "react-native-select-dropdown";
import { collection, addDoc, getFirestore, onSnapshot, QuerySnapshot, updateDoc} from "firebase/firestore";
import {app} from '../../config/firebase';
import Loading from "../../components/Loading";




export default function CadastroAnimal({navigation}:any){

    const db = getFirestore(app);

    const [valor, setValor] = useState("");
    const [tipo, setTipo] = useState("");
    const [descricao, setDescricao] = useState("");
    const Tipo = ["Débito", "Crédito"]

    const [loading, setLoading] = useState(false);

    async function AddLancamento(){

      const queryFinanceiro = collection(db, "Financeiro")
        onSnapshot(queryFinanceiro, (QuerySnapshot) => {

            QuerySnapshot.forEach((doc) => {
                const {debito, credito} = doc.data();
                console.log(debito, credito);
            })
        })

      setLoading(true);
      try {
        const docRef = await addDoc(collection(db, "Caixa"), {
        descricao,
        tipo,
        valor,
        });
        
        console.log("Document written with ID: ", docRef.id);
        if (tipo == "Débito"){
          await addDoc(collection(db, "Debitos"), {
            valor: valor,
            });
            
        } else {
          await addDoc(collection(db, "Creditos"), {
            valor:valor
            });
        }

        setLoading(false);

        Alert.alert("Lançamento cadastrado com sucesso!")
 
      } catch (e) {
        Alert.alert("Erro ao cadastrar!")
        console.error("Error adding document: ", e);
        setLoading(false);
      }
    }
 
    async function Soma(){

      
    } Soma();


    return(
      
        <Container>
          
            <Header/>
            <TelaLogin >
            <Mensagem>
            <Title>Incluir dados</Title>
            </Mensagem>
            
            <Inputs>

            
                <InputFinanceiro type="descricao" 
                placeholder="Descrição" 
                onChangeText={text=>(setDescricao(text))}
                placeholderTextColor={"#808080"}
                />

                <InputFinanceiro type="number"
                keyboardType="number-pad" 
                placeholder="Valor" 
                onChangeText={text=>(setValor(text))}
                placeholderTextColor={"#808080"}
                 />

                <SelectDropdownProps data={Tipo}
                onSelect={(selectedItem, index) => {
                  setTipo(selectedItem);
                }}

        
                buttonTextAfterSelection={(selectedItem, index) => {

                  return selectedItem
                }}
                rowTextForSelection={(item, index) => {

                  return item
                }}
                buttonStyle={{backgroundColor:'#ffffff', borderRadius:20, width:160, height:60, shadowColor:' #272727', shadowOpacity:100, alignItems:'center', alignContent:'center', alignSelf:"center" }} 

                dropdownStyle={{backgroundColor:'white', borderRadius:20}}

                defaultButtonText={('Tipo')}

                renderDropdownIcon={isOpened => {
                  return <AntDesign name="down" size={24} color="black" />;
                }}


                buttonTextStyle={{ fontSize:15, color:'#1b1b1b' }}

                searchPlaceHolder={('Categoria')}
                
/>

                <Loading visible={loading} />

            { descricao != "" && valor != null && tipo != "" 
            
            ? <ButtonsLogin type="Lançar" onPress={AddLancamento} />
            : <Text> Preencha todos os campos!</Text>
            }

                
            </Inputs>
            
            
            </TelaLogin>
            
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

