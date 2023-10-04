import React, {useEffect, useState} from "react";
import {Container, Title, Lista,Caixa} from './style'
import CardDataFinanceiro from "../../components/CardDataFinanceiro";
import Header from "../../components/Header";
import { QuerySnapshot, collection, getFirestore, onSnapshot } from "firebase/firestore";
import {app} from '../../config/firebase';


export default function Financeiro(){


    const db = getFirestore(app);
    const [caixa, setCaixa] = useState();

    useEffect(()=>{
        const colRef = collection(db, "Caixa")
        onSnapshot(colRef,(QuerySnapshot)=>{
            const caixa:any=[]
            QuerySnapshot.forEach((doc)=>{
                const {descricao, tipo, valor} = doc.data()
                caixa.push({
                    id:doc.id,
                    descricao,
                    tipo,
                    valor
                })
            })
               setCaixa(caixa); 
        })
    }, [])

    return (
        <Container>
            <Header/>
            <Title>Caixa</Title>
            <Caixa>
            <Lista
            showsHorizontalScrollIndicator={false}
            data={caixa}
            keyExtractor={(item:any)=>item.id}
            renderItem={({item}:any)=>
            <CardDataFinanceiro data={item} />
        }
            />
            </Caixa>
        </Container>
    )
}