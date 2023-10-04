import { styled } from "styled-components/native";
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient).attrs({
    colors:["#188A89", "#137372"]
})` 
flex:1;
justify-content:space-evenly;
padding:20px;
`; 

export const Logo = styled.Image`
    width: 20%;
`;

export const Buttons = styled.View`
    align-items: center;
`;

export const Header = styled.View`
    align-items: center;
`;

export const Sigep = styled.Text`
    font-family: ${({theme})=>theme.fonts.bold};
    color: ${({theme})=>theme.colors.branco};
    font-size: 40px;
`;

export const Entrar = styled.TouchableOpacity``;

export const Criar = styled.TouchableOpacity``;