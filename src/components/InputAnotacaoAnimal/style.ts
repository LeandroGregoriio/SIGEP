import styled from "styled-components/native";
import { TextInput } from "react-native";

export const Container = styled(TextInput)`
 background-color: ${({theme})=>theme.colors.branco};
width: 100%;
height: 60px;
border-radius:15px;
text-align: center;
align-items: center;
justify-content: center;
`;