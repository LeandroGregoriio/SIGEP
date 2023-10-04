import { TouchableOpacity } from 'react-native';
import { styled } from "styled-components/native";


export const Header = styled.View`

`;

export const TelaLogin = styled.View`

`;


export const Cumprimento = styled.Text`
    font-family: ${({theme})=>theme.fonts.semibold};
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

export const Text = styled.Text`
font-family: ${({theme})=>theme.fonts.medium};
    color: ${({theme})=>theme.colors.text};
    font-size: 15px;
`;


export const Container = styled.View`
flex: 1;
background-color: #EAEAEA;
padding: 20px;
`;

export const ResetPassword = styled(TouchableOpacity)``;

export const RecuperarSenha = styled.Text`


font-family: ${({theme})=>theme.fonts.medium};
color: ${({theme})=>theme.colors.text};

`;


