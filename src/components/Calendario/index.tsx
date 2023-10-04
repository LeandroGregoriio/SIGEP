import React from "react";
import {Calendar as CustomCalendar} from 'react-native-calendars';
import {Container,Text} from './style';
import { CalendarContextProps } from "react-native-calendars/src/expandableCalendar/Context";
import {Calendar, LocaleConfig} from 'react-native-calendars';
import { CalendarProps } from "react-native-calendars";




LocaleConfig.locales['pt-br'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ],
  monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abril', 'Maio', 'Jun', 'Jul.', 'Ago', 'Set.', 'Out.', 'Nov.', 'Dez.'],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sab.'],
};

LocaleConfig.defaultLocale = 'pt-br';


export default function Calendario({ ...rest}:CalendarProps){
    return(
        <Container>
            <Text>Data de Nascimento</Text>
        <CustomCalendar {...rest}/> 
        </Container>
    )
}