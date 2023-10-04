import { styled } from "styled-components/native";

export const Title = styled.Text`
    margin-top: 20px;
    font-family: ${({theme})=>theme.fonts.bold};
    color: ${({theme})=>theme.colors.title};
    font-size: 22px;
`;
