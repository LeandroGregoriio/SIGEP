import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    background-color: white;
    padding: 5%;
`;

export const Info = styled.View`

    width: 100%;
    justify-content: space-between;
    max-height: 60%;
    padding: 10px;
    min-height: 15%;
    border-radius: 20px;
    flex-direction: row;

`;

export const Dados = styled.Text`

font-size: 15px;
color: ${({theme})=>theme.colors.title};
font-family: ${({theme})=>theme.fonts.semibold};

`;

export const Text = styled.Text`

font-size: 15px;
color: ${({theme})=>theme.colors.title};
font-family: ${({theme})=>theme.fonts.medium};

`;


export const Categoria = styled.Text`

font-size: 25px;
color: ${({theme})=>theme.colors.title};
font-family: ${({theme})=>theme.fonts.bold};
left: 0;
margin-top: 5%;
`;

export const Anotacao = styled.View`

background-color: #F7F7F7 ;
padding: 10px;
border-radius: 5px;
width: 100%;
height: 15%;
`;

export const Foto = styled.View`

background-color: blue;
margin-top: 20px;
width: 200px;
height: 200px;

`;


export const Buttons = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    position: absolute;
    bottom: 5%;
`;

