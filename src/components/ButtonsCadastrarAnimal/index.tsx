import React from "react";
import {Container, Title} from './style';
import { TouchableOpacityProps } from "react-native";

interface Props extends TouchableOpacityProps {
    type:string;
}

export default function ButtonsCadastrarAnimal({ type, ...rest}:Props){
    return(
        <Container {...rest} >      
        <Title {...rest} >{type}</Title>   
        </Container>
    )
}