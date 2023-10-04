import styled from "styled-components/native";

export const Container = styled.View`

background-color : white ;
border-radius: 5px;
margin-top: 10px;
text-align: center;
align-items: center;
padding: 10px;
width: 100%;
`;

export const Text = styled.Text`

    font-size: 15px;
    font-family: ${({theme})=>theme.fonts.medium};

`;