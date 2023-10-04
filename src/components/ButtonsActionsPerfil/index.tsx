import React from "react";
import { Container, Title, } from './style';
import { TouchableOpacityProps } from "react-native";

interface Props extends TouchableOpacityProps{
  cardName: string;
  type:'exlcuir' | 'alterar';
}

export default function CardFinancas({ cardName, ...rest }: Props): JSX.Element {
  return (
    <Container {...rest} >
        <Title  >{cardName}</Title>
    </Container>
  );
}
