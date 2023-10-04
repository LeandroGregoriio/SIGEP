import { styled } from 'styled-components/native';
import { MaterialCommunityIcons, FontAwesome5} from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacityProps } from 'react-native/Libraries/Components/Touchable/TouchableOpacity';

export const Container = styled.TouchableOpacity<TouchableOpacityProps>`
    background-color: white;
    height: 70px;
    margin-top: 15px;
    border-radius: 5px;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.1);
    width: 100%;
    padding: 10px;
    flex-direction: row;
    align-items: center;
`;

export const Title = styled.Text`
    font-family: ${({theme})=>theme.fonts.medium};
    color: ${({theme})=>theme.colors.title};
    font-size: 14px;
`;

export const SaldoAtual = styled.Text`
    font-family: ${({theme})=>theme.fonts.bold};
    color: ${({theme})=>theme.colors.text};
    font-size: 18px;
`;


export const Header = styled.View`
    margin-left: 20px;
`;

export const Icon = styled(MaterialIcons)`
    font-size: 40px;
    color: ${({theme})=>theme.colors.text};
`;