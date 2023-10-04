import styled from "styled-components/native";

export const Container = styled.View`
    align-items: center;
    flex: 1;
background-color: #EAEAEA;
padding: 20px;
`;

export const Title = styled.Text`
    font-family: ${({theme})=>theme.fonts.semibold};
    color: ${({theme})=>theme.colors.text};
    font-size: 22px;
    margin-top: 10px;
`;

export const Lista = styled.FlatList`
margin-top: 20px;
max-height: 75%;
`;

export const Caixa = styled.View`

flex: 1;

`