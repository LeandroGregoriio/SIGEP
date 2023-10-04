import React from "react";
import {Container, Foto, Info, Dados, Text} from './style';
import { TouchableOpacityProps } from "react-native";

export interface AnimalCardProps {
    id:string,
    brinco:string,
    categoria:string,
    peso:string,
}

export interface Props extends TouchableOpacityProps {
    data:AnimalCardProps
}

export default function AnimalCards({data, ...rest}:Props){
    return (
        <Container {...rest} >
            <Foto></Foto>
            <Info>
                <Dados>Categoria: <Text>{data.categoria}</Text></Dados>
                <Dados>Brinco: <Text>{data.brinco}</Text> </Dados>
                <Dados>Peso: <Text>{data.peso} KG</Text> </Dados>
            </Info>
        </Container>
    )
}