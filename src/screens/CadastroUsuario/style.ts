import { styled } from "styled-components/native";

export const Header = styled.View`

`;

export const TelaLogin = styled.View`

`;


export const Text = styled.Text`
    font-family: ${({theme})=>theme.fonts.bold};
    color: ${({theme})=>theme.colors.title};
    font-size: 22px;
`;

export const Inputs = styled.View`
    margin-top: 80px;
`;

export const Mensagem = styled.View`
    align-items: center;
    margin-top: 20px;
    
`;


export const Container = styled.View`
flex: 1;
background-color: #EAEAEA;
padding: 20px;
`;

export const ResetPassword = styled.TouchableOpacity``;
