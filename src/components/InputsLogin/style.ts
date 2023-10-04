import { styled } from 'styled-components/native';
import { MaterialCommunityIcons, FontAwesome5} from '@expo/vector-icons';
import { TextInput } from 'react-native';

interface Props{
    type:string;
    placeholder:string;
}

export const Container = styled(TextInput)<Props>`
    background-color: ${({theme})=>theme.colors.branco};
    height: 60px;
    margin-top: 15px; 
    border-radius: 20px;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.1);
    align-items: center;
    justify-content: space-around;
    width: 100%;
    padding: 10px;
`;
