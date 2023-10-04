import { TouchableOpacity } from 'react-native';
import { styled } from "styled-components/native";


export const Header = styled.View`

`;

export const TelaLogin = styled.View`

`;


export const Mensagem = styled.Text`
    font-family: ${({theme})=>theme.fonts.medium};
    color: ${({theme})=>theme.colors.title};
    font-size: 12px;
    margin-top: 20px;
`;

export const Inputs = styled.View`
    margin-top: 20px;
    width: 100%;
`;


export const Text = styled.Text`
font-family: ${({theme})=>theme.fonts.semibold};
    color: ${({theme})=>theme.colors.title};
    font-size: 18px;
`;


export const Container = styled.View`
flex: 1;
background-color: #EAEAEA;
padding: 20px;
align-items: center;
`;

export const ResetPassword = styled(TouchableOpacity)``;

export const RecuperarSenha = styled.Text`


font-family: ${({theme})=>theme.fonts.medium};
color: ${({theme})=>theme.colors.text};

`;

export const ButtonEnviarEmail = styled(TouchableOpacity)`

    margin-top: 10px;

`;
