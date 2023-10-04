import React from "react";
import {Title} from './style';

interface Props{
    name:string;
}

export default function ScreenNames({name}:Props){
    return(
        <Title>{name}</Title>      
    )
}