import { styled } from "styled-components/native";

export const Header = styled.View`

`;

export const Ativos = styled.View`
    flex: 1;
`;


export const Title = styled.Text`
    font-family: ${({theme})=>theme.fonts.semibold};
    color: ${({theme})=>theme.colors.text};
    font-size: 22px;
`;

export const Text = styled.Text`
    font-family: ${({theme})=>theme.fonts.medium};
    color: ${({theme})=>theme.colors.vermelho};
    font-size: 15px;
    margin-top: 20px;
`;

export const Inputs = styled.KeyboardAvoidingView`
    margin-top: 20px;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
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

export const Lista = styled.FlatList`
margin-top: 20px;
max-height: 75%;
`