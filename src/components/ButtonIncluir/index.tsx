import React from "react";
import {Container, Title, Header} from './style';
import { TouchableOpacityProps } from "react-native";

interface Props extends TouchableOpacityProps{
    title:string;
}


export default function ButtonIncluir({title, ...rest}:Props){
    return(
        <Container {...rest} >      
            <Header>
            <Title>{title}</Title>   
            </Header>
        </Container>
    )
}