import React from "react";
import {Container, Title} from './style';
import { TouchableOpacityProps } from "react-native";

interface Props extends TouchableOpacityProps {
    type:string;
}

export default function ButtonEnviarEmail({type, ...rest}:Props){
    return(
        <Container {...rest} >      
        <Title >{type}</Title>   
        </Container>
    )
}