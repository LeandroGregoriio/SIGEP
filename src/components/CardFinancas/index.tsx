import React from "react";
import { Container, Title, Valor, Header } from './style';

interface Props {
  cardName: string;
  valor: number;
  type:'entrada' | 'despesa';
}

export default function CardFinancas({ cardName, valor, ...rest }: Props): JSX.Element {
  return (
    <Container {...rest} >
      <Header>
        <Title  >{cardName}</Title>
      </Header>
      <Valor>R$ {valor}</Valor>
    </Container>
  );
}
