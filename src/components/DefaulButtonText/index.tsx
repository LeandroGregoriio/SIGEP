import React from "react";
import { AntDesign } from '@expo/vector-icons';
import { Text, View } from "react-native";
import { Container, Icon } from "./style";

export default function DefaulButtonText (){

    return(
        <Container>
            <Text> Categoria </Text><Icon name="down" size={24} color="black" />
        </Container>
    )

}