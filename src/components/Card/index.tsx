import React from "react";
import {Container, Title, Number, Header} from './style';
import { TouchableOpacityProps } from 'react-native';


interface Props extends TouchableOpacityProps {
    cardName:string;
    number:any;
}

export default function Card({cardName, number, ...rest}:Props){
    return(
        <Container {...rest} >      
            <Header>
            <Title>{cardName}</Title>   
            </Header>
            <Number>{number}</Number>
        </Container>
    )
}