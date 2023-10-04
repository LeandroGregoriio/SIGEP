import React from "react";
import {Container, Title, SaldoAtual, Header, Icon} from './style';
import { TouchableOpacityProps } from "react-native/Libraries/Components/Touchable/TouchableOpacity";


interface Props extends TouchableOpacityProps {
    cardName:string;
    valor:string;
}

export default function Card({cardName, valor, ...rest}:Props){
    return(
        <Container  {...rest} > 
            <Icon name='attach-money' />      
            <Header>          
            <Title>{cardName}</Title>
            <SaldoAtual>R$ {valor}</SaldoAtual>   
            </Header>   
        </Container>
    )
}