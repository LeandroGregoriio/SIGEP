import { TouchableOpacityProps } from 'react-native';
import  styled  from "styled-components/native";
import { AntDesign } from '@expo/vector-icons';


export const Container = styled.View`
flex: 1;
background-color: #EAEAEA;
`;

export const Sigep = styled.Text`
    margin: 40px 0px 0px 20px;
    font-family: ${({theme})=>theme.fonts.bold};
    color: ${({theme})=>theme.colors.verde};
    font-size: 22px;
`;

export const Painel = styled.View`
    margin: 0px 20px;
`;

export const ScreenName = styled.Text`
    margin-top: 20px;
    font-family: ${({theme})=>theme.fonts.bold};
    color: ${({theme})=>theme.colors.title};
    font-size: 22px;
`;

export const Header = styled.View`
    align-items: center;
`;

export const Menu = styled.View`
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
`;

export const Title = styled.Text`
    margin-top: 20px;
    font-family: ${({theme})=>theme.fonts.medium};
    color: ${({theme})=>theme.colors.text};
    font-size: 15px;
`;

export const Financas = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between; 
`;

export const ButtonLogout = styled(AntDesign)<TouchableOpacityProps>`
    font-size: 30px;
    right:20px;
    bottom: 100px;
    position: absolute;
    color: ${({theme})=>theme.colors.vermelho};
`;