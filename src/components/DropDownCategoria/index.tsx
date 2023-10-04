import React from "react";
import {Container} from './style'


import { SelectDropdownProps } from "react-native-select-dropdown";


export default function DropDownCategoria({...rest}:SelectDropdownProps){

    return(
        <Container {...rest} selectedRowTextStyle={{backgroundColor:'#188A89'}} />
    )
}