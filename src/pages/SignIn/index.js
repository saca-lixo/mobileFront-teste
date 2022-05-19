import React, { useState } from "react";
import { View, Text, StyleSheet} from "react-native";

import * as Animatable from 'react-native-animatable'
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

export default function SignIn() {
    const [email, setEmail] = useState(null)
    const [Senha, setSenha] = useState(null)
    return(
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Bem-Vindo</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUP" style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput
                  placeholder="Digite o seu Email..."
                  keyboardType='email-address'
                  onChangeText={value => setEmail(value)}
                  style={styles.input}
                />
                  <Text style={styles.title}>Senha</Text>
                <TextInput
                  placeholder="Digite a Senha"
                  onChangeText={value => setSenha(value)}
                  secureTextEntry= {true}
                  style={styles.input}
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister}>
                    <Text style={styles.registerText}>Não possui uma conta? Cadastra-se</Text>
                </TouchableOpacity>
                
            </Animatable.View>             

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
         flex:1,
         backgroundColor: '#00008B'
    },
    containerHeader:{
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%'
    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff' 
    },
    containerForm:{
        backgroundColor: '#fff',
        flex:1,
        borderTopLeftRadius: 25,
        borderTopRightRadius:25,
        paddingStart:'5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize: 20,
        marginTop: 28,   
    },
     input:{
         borderBottomWidth: 1,
         height: 40,
         marginBottom:12,
         fontSize: 16,
     },
     button:{
         backgroundColor:'#00008B',
         width:'100%',
         borderRadius: 4,
         paddingVertical: 8,
         marginTop: 14,
         justifyContent: 'center',
         alignItems:'center',   
     },
     buttonText:{
         color:'#fff',
         fontSize: 18,
         fontWeight:'bold'
     },
     buttonRegister:{
         marginTop: 14,
         alignSelf: 'center'
     },
     registerText:{
         color:'#a1a1a1'
     }

})