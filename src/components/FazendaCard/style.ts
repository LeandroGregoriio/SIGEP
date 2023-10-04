import { styled } from "styled-components/native";

export const Container = styled.View`
    background-color: ${({theme})=>theme.colors.branco};
    border-radius: 10px;
    margin-top: 15px;
    height: 100px;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`;

export const Title = styled.Text`
     font-size: 15px;
     font-family: ${({theme})=>theme.fonts.semibold};
     color: ${({theme})=>theme.colors.text};
`;

export const Cor = styled.View`
background-color:${({theme})=>theme.colors.verde};
width: 3%;
height: 100%;
border-radius: 0px 5px 5px 0px;
position: absolute;
right: 0;
`;

export const FazendaName = styled.Text`
font-size: 25px;
font-family: ${({theme})=>theme.fonts.semibold};
color: ${({theme})=>theme.colors.title};
`;


export const Footer = styled.View`
justify-content: space-between;
flex-direction: row;
margin: 5px 10px 5px 0px;
`;
    
    
export const Data = styled.Text`
font-size: 12px;
font-family: ${({theme})=>theme.fonts.semibold};
color: ${({theme})=>theme.colors.text};
`;
    
    
export const AnimaisAtivos = styled.Text`
font-size: 12px;
font-family: ${({theme})=>theme.fonts.semibold};
color: ${({theme})=>theme.colors.text};   
`;

export const Header = styled.View`

`;

export const Dados = styled.View`
    padding: 15px;
    width: 100%;
`;