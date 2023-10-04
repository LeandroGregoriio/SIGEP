import { styled } from "styled-components/native";

export const Container = styled.SafeAreaView`
    align-items: center;
    margin-top: 20px;
`;

export const Sigep = styled.Text`
    font-family: ${({theme})=>theme.fonts.bold};
    color: ${({theme})=>theme.colors.verde};
    font-size: 22px;
`;