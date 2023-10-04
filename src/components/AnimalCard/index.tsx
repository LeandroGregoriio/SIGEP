import React from "react";
import {Container, Div, Text} from './style';
import { TouchableOpacityProps } from "react-native";
import { TouchableOpacity } from "react-native";

export interface AnimalCardProps {
    id:string,
    brinco:string,
    categoria:string,
    peso:string,
}

export interface Props extends TouchableOpacityProps {
    data:AnimalCardProps
}


export default function AnimalCard({data}:Props){
    return(
        <Container >
            <Div><Text>262</Text></Div>
            <Div><Text>Novilha</Text></Div>
            <Div><Text>350kg</Text></Div>
        </Container>
    )
}