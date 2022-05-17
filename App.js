import 'react-native-gesture-handler';
import { React  } from 'react';
import { createStackNavigator } from '@react-navigation/native-';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import Principal from './screens/Principal';




const Stack = createStackNavigator();

function MyStack() {
  
}

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator>
      <Stack.Screen name = "Login" component={Login} />
      <Stack.Screen name = "Principal" component={Principal} />
      
    </Stack.Navigator>
  
    </NavigationContainer>
  );
}

