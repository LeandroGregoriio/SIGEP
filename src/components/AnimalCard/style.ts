import { TouchableOpacity } from 'react-native';
import { styled } from "styled-components/native";
import { TouchableOpacityProps } from 'react-native';

export const Container = styled.View`
    flex-direction: row;
    height: 40px;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
    margin-top: 2px;
`;


export const Text = styled.Text`
    font-size: 20px;
    color: ${({theme})=>theme.colors.text};
    font-family: ${({theme})=>theme.fonts.medium};
`;

export const Div = styled.View`
    background-color:${({theme})=>theme.colors.branco} ;
    height: 40px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-top: 2px;
    width: 33%;
`;
