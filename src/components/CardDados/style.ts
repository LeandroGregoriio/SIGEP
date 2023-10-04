import { styled } from "styled-components/native";

export const Container = styled.View`
    flex-direction: row;
    height: 40px;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 5px;
`;

export const Text = styled.Text`
    font-size: 20px;
    color: ${({theme})=>theme.colors.branco};
    font-family: ${({theme})=>theme.fonts.medium};
`;

export const Div = styled.View`
    background-color: ${({theme})=>theme.colors.verde};
    height: 40px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-top: 2px;
    width: 33%;
`;
