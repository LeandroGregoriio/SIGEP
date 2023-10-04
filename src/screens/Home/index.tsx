import React, { useState, useEffect } from "react";
import {Container, Menu, Painel, Title, Financas, ButtonLogout} from './style';
import ButtonIncluir from '../../components/ButtonIncluir'
import Card from '../../components/Card/';
import SaldoAtual from '../../components/SaldoAtual';
import CardFinancas from '../../components/CardFinancas';
import Header from "../../components/Header";
import ScreenNames from '../../components/ScreenNames';
import { collection, getFirestore, onSnapshot, updateDoc, doc} from "firebase/firestore";
import { app } from "../../config/firebase";
import { getAuth, signOut } from "firebase/auth";

export default function Home({navigation}:any){

    const [debito, setDebito] = useState(0);
    const [credito, setCredito] = useState(0);
    const [total, setTotal] = useState('');
    const [AnimaisAtivos, setAnimaisAtivos] = useState([]);

    const db = getFirestore(app);
    
//array
    useEffect(()=>{
        const arrayDebitos:any =[]
        const arrayCreditos:any =[]

        const queryAtivos = collection(db, "AnimaisAtivos")
          onSnapshot(queryAtivos, (QuerySnapshot) => {
              const ativos:any = []
              QuerySnapshot.forEach((doc) => {
                   doc.data()
                   ativos.push({ 
                      id: doc.id
                  })
              })
              setAnimaisAtivos(ativos);
          })

          const somaDebitos = collection(db, "Debitos")
          const somaCreditos = collection(db, "Creditos")
          
          onSnapshot(somaDebitos, (QuerySnapshot) => {
              QuerySnapshot.forEach((doc) => {
                var somaDebitos = 0;
                
                const {valor} = doc.data()

                arrayDebitos.push(parseInt(valor))

                for ( var i = 0; i < arrayDebitos.length; i++ ){
                    somaDebitos += arrayDebitos[i];
                }
                console.log(somaDebitos);
                setDebito(somaDebitos); 
              }) 
          })  


          onSnapshot(somaCreditos, (QuerySnapshot) => {
            QuerySnapshot.forEach((doc) => {
              var somaCreditos = 0;
              
              const {valor} = doc.data()

              arrayCreditos.push(parseInt(valor))

              for ( var i = 0; i < arrayCreditos.length; i++ ){
                somaCreditos += arrayCreditos[i];
              }
              console.log(somaCreditos);
              setCredito(somaCreditos); 
            }) 
        })  
          
 


          const queryFinanceiro = collection(db, "Financeiro")
        onSnapshot(queryFinanceiro, (QuerySnapshot) => {

            QuerySnapshot.forEach((doc) => {
                const {debito, credito} = doc.data()
                var total:any =credito-debito; 
                setTotal(total);
            })
        })
          } 
        ,[])
 
        
        async function UpdateFinanceiro() {  
            const updateFinanceiro = doc(db, "Financeiro", "GtudDHvD9pwTOhCVcE3k");
            await updateDoc(updateFinanceiro, {  
               debito:debito,
               total:total,
               credito:credito
            });
           }UpdateFinanceiro()
   

    function logout(){const auth = getAuth();
        signOut(auth).then(() => {
          navigation.navigate("TelaInicial")
        })
    }
    return(
        <Container>
            <Header/>
            <Painel>          
                <ScreenNames name='Fazenda Serrado'/>
                <Title>Painel</Title>
                <Menu>      
                <Card cardName='Animais Ativos' number={AnimaisAtivos.length} 
                onPress={()=>navigation.navigate('AnimaisAtivos')} />
                <Card cardName='Nascimentos' number='20' />
                <Card cardName='Leite' number='206L' />
                <Card cardName='Abates' number='03' />
                </Menu>      

            <Financas>
            <Title>Finanças</Title>
                <SaldoAtual cardName='Saldo Atual' valor={total} onPress={()=>navigation.navigate('Financeiro')} />
                <CardFinancas  type="entrada" cardName='Entradas' valor={credito}  />
                <CardFinancas  type="despesa" cardName='Despesas' valor={debito} />
                <ButtonIncluir title="Incluir" onPress={()=>navigation.navigate('ModalFinanceiro')} />
            </Financas>
              
            </Painel>
            <ButtonLogout name='logout' onPress={logout} />
        </Container>
    )
}