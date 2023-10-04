import { styled } from "styled-components/native";
import { SelectDropdownProps } from "react-native-select-dropdown";
import SelectDropdown from "react-native-select-dropdown";

export const Container = styled(SelectDropdown).attrs({
    defaultButtonText:('Teste')
})`
    height: 60px;
    width: 48%;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.1);
`;