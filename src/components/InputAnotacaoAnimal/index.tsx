import React from "react";
import { TextInput } from "react-native";
import {Container} from './style';
import { TextInputProps } from "react-native";

export default function InputAnotacaoAnimal({...rest}:TextInputProps){
    return (
        <Container {...rest} />
    )
}