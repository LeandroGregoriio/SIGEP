import React from "react";
import {Container, Fazendas, Title, FazendasList} from './style';
import FazendaCard from "../../components/FazendaCard";
import ScreenNames from "../../components/ScreenNames";
import Header from "../../components/Header";

interface Props{
    FazendaName:string;
}

export default function Fazenda(){
    return(
        <Container>
            <Header/>
            <Fazendas>
                <ScreenNames name='Fazendas' />
            <FazendasList>
                <FazendaCard name='Serrado' data='08/07/2023' ativos="350" />
                <FazendaCard name='Três Marias' data='05/06/2015' ativos="3120" />
            </FazendasList>
            </Fazendas>
        </Container>
    );
}