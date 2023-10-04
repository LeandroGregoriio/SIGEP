import { styled } from 'styled-components/native';
import { MaterialCommunityIcons, FontAwesome5} from '@expo/vector-icons';

interface Props{
    type:string;
}

export const Container = styled.TouchableOpacity<Props>`
    background-color: ${({theme, type})=> type==='Entrar' ? '#1CA7A6': type==='Criar' ? '#1CA7A6': theme.colors.branco };
    height: 60px;
    margin-top: 15px;
    border-radius: 20px;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.1);
    align-items: center;
    justify-content: space-around;
    width: 100%;
    padding: 10px;
    position: absolute;
    bottom: 5%;
`;

export const Title = styled.Text<Props>`
    font-family: ${({theme})=>theme.fonts.bold};
    color: ${({theme, type})=> type==='Entrar' ? theme.colors.branco: type==='Criar' ? theme.colors.branco: theme.colors.title };
    font-size: 18px;
`;
