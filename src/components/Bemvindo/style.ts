import { styled } from "styled-components/native";
import {ModalProps} from 'react-native'

export const View = styled.View`
    background-color: ${({theme})=>theme.colors.verde};
    flex: 1;
    text-align: center;
    align-items: center;
    justify-content: center;
   
`;

export const Text = styled.Text`
    font-size: 30px;
    color: ${({theme})=>theme.colors.branco};
    font-family:${({theme})=>theme.fonts.bold};
`;