import { ThemeProvider } from 'styled-components';
import {useFonts, Montserrat_600SemiBold, Montserrat_500Medium, Montserrat_700Bold} from '@expo-google-fonts/montserrat';
import Home from './src/screens/Home';
import { Routes } from './src/routes';
import theme from './src/global/styles/theme';
import { useState } from 'react';
export default function App() {

  const [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_500Medium
  });

if (!fontsLoaded){
  return null
    } else {
      return (
        <ThemeProvider theme={theme}>
                 
              <Routes/>
    
          </ThemeProvider>
        )
    } 
  }
  

