import React from "react";
import {Container, Text} from './styles'
import {TouchableOpacityProps} from 'react-native';


export interface Props extends TouchableOpacityProps{

}

export default function ButtonUpload({...rest}:Props){
    return(
        <Container {...rest} >
            <Text>Foto</Text>
        </Container>
    )
}