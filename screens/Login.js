import { React, useState } from 'react';
import {StyleSheet  ,View } from 'react-native';
import { Button, Input, Text,ThemeProvider,createTheme } from '@rneui/themed';
import styles from '../style/mainStyle';

export default function Login(navigation) {

  const [email,setEmail] = useState(null)
  const [password,setPassword] = useState(null)

  const entrar =() => {
     navigation.reset({
       index: 0,
       routes: [{name:'Principal' }]
     })
  }
  
  const theme = createTheme({
    Button: {
      raised: true,
    },
  });
  return (

    <ThemeProvider theme={theme}>
       <View style={styles.container} >
        <Text h3>Faça o seu login</Text>
        <Input
       placeholder='E-mail'
       keyboardType='email-address'
       onChangeText={value => setEmail(value)}
       leftIcon={{type: 'font-awesome' , name:'envelope'}}
    
        />
        <Input
       placeholder='Senha'
       onChangeText={value => setPassword(value)}
       leftIcon={{type: 'font-awesome' , name:'lock'}}
       secureTextEntry={true}
    
        />
       <Button
        title="Entrar" 
        onPress={() => entrar()}
        />
      
      </View>
     
    </ThemeProvider>

   
  );
}

