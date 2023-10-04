import { styled } from 'styled-components/native';
import { MaterialCommunityIcons, FontAwesome5} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { TouchableOpacityProps } from 'react-native';


export const Container = styled.TouchableOpacity<TouchableOpacityProps>`
    background-color: ${({theme})=> theme.colors.branco};
    height: 50px;
    margin-top: 15px;
    border-radius: 5px;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.1);
    align-items: center;
    justify-content: space-around;
    width: 100%;
    padding: 10px;
`;

export const Title = styled.Text`
    font-family: ${({theme})=>theme.fonts.bold};
    color: ${({theme})=>theme.colors.verde};
    font-size: 15px;
`;



export const Header = styled.View`
    text-align: center;
    flex-direction: row;
    justify-content: center;
    text-align: center;
`;