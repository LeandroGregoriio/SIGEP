import React from "react";
import {Container, Descricao, Tipo, Valor} from './style'


export interface FinanceiroProps{
    descricao: string,
    tipo:string,
    valor:string
}

export interface Props {
    data: FinanceiroProps
}

export default function CardDataFinanceiro({data}:Props){
    return(
        <Container>
            <Descricao> {data.descricao} </Descricao>
            <Tipo> {data.tipo} </Tipo>
            <Valor> {data.valor} </Valor>
        </Container>
    )
}