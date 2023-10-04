import {styled} from "styled-components/native";

export const Container = styled.TouchableOpacity`
    flex-direction: row;
    background-color: white;
    border-radius: 5px;
    height: 100px;
    padding: 10px;
    margin-top: 10px;
    
`;

export const Info = styled.View`
    justify-content: space-around;
    margin-left: 25px;
`;

export const Dados = styled.Text`
    font-size: 15px;
    color: ${({theme})=>theme.colors.title};
    font-family: ${({theme})=>theme.fonts.medium};
`;


export const Text = styled.Text`
    font-size: 15px;
    color: ${({theme})=>theme.colors.text};
    font-family: ${({theme})=>theme.fonts.medium};
`;


export const Foto = styled.View`
    background-color: white;
    height: 100%;
    width: 90px;
`;