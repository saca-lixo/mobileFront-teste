import React from 'react';
import { StatusBar} from 'react-native';

import { NavigationContainer} from '@react-navigation/native'
import Rotas from './src/rotas'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#fff" barStyle = 'light-content'/>
      <Rotas/>
    </NavigationContainer> 
     );
}

