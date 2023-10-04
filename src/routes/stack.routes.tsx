import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaInicial from '../screens/TelaInicial';
import Login from '../screens/Login';
import Home from '../screens/Home';
import CadastroUsuario from '../screens/CadastroUsuario'
import CadastroAnimal from '../screens/CadastroAnimal'
import AnimaisAtivos from '../screens/AnimaisAtivos'
import ModalFinanceiro from '../components/ModalFinanceiro'
import Financeiro from '../screens/Financeiro';
import CadastroDeOrdenha from '../screens/CadastroDeOrdenha'
import  RecuperarSenha  from '../screens/RecuperarSenha';
import PerfilAnimal from '../screens/PerfilAnimal';
import AlterarDadosAnimal from '../screens/AlterarDadosAnimal'

const {Screen, Navigator} = createNativeStackNavigator();

export function StackRoutes(){
    return (
        <Navigator screenOptions={{headerShadowVisible:false, headerTintColor:'#188A89', headerTransparent:true, headerTitle:('')}}>
            
            <Screen name="TelaInicial" component={TelaInicial}/>
            <Screen name='Login' component={Login} />
            <Screen name='Home' component={Home} options={{headerBackVisible:false, headerBackTitleVisible:true}}  />
            <Screen name='CadastroUsuario' component={CadastroUsuario} />
            <Screen name='CadastroAnimal' component={CadastroAnimal} />
            <Screen name='AnimaisAtivos' component={AnimaisAtivos} />
            <Screen name='ModalFinanceiro' component={ModalFinanceiro}/>
            <Screen name='Financeiro' component={Financeiro}/>
            <Screen name='CadastroDeOrdenha' component={CadastroDeOrdenha}/>
            <Screen name='RecuperarSenha' component={RecuperarSenha}/>
            <Screen name='PerfilAnimal' component={PerfilAnimal}/>
            <Screen name='AlterarDadosAnimal' component={AlterarDadosAnimal}/>
        </Navigator>
    )
}