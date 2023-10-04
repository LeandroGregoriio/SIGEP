import React from "react";
import {Container} from './style';
import { TextComponent, TextInputProps } from "react-native";

interface Props extends TextInputProps{
    type:string ;
    placeholder:string;
}

export default function InputFinanceiro({type, ...rest}:Props){
    return(
        <Container {...rest} />      
    )
}