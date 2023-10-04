import { TouchableOpacityProps } from 'react-native';
import styled from "styled-components/native";


export const Container = styled.TouchableOpacity<TouchableOpacityProps>`

background-color: ${({theme})=>theme.colors.branco};
width: 100%;
height: 60px;
border-radius:15px;
text-align: center;
align-items: center;
justify-content: center;
`

export const Text = styled.Text`

font-size: 15px;
font-family: ${({theme})=>theme.fonts.medium};
`;