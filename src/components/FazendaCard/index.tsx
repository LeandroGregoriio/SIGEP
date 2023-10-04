import React from "react";
import {
    Container,
     Title,
    FazendaName,
    Footer,
     Data,
      AnimaisAtivos,
      Cor,
      Header,
      Dados
} from './style'

interface Props{
    name:string;
    data:string;
    ativos:string;
}

export default function FazendaCard({name, data, ativos}:Props){
    return(
        <Container>
            <Dados>
            <Header>
            <Title>Fazenda</Title>
            <FazendaName>{name}</FazendaName>
            </Header>
            <Footer>
                <Data>Criada em: {data}</Data>
                <AnimaisAtivos>AnimaisAtivos: {ativos}</AnimaisAtivos>
            </Footer>
            </Dados>
            <Cor/>
        </Container>
    )
}