import React from "react";
import { View, Text, StyleSheet,Image,TouchableOpacity} from "react-native";
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'

export default function Welcome() {
    const navigation = useNavigation();
    
    return(
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image
                  animation="flipInY"
                  source={require('../../assets/logoSaca.png')}
                  style={{width: '100%'}}
                  resizeMode="contain"
                />
            </View>
            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Salvar,Agir,Contruir e Ajudar</Text>
                <Text style={styles.text}>Faça o seu Login</Text>

                <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('SignIn')}
                />
                  <Text style={styles.buttonText}>Entrar</Text>

            </Animatable.View>
            

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    containerLogo:{
        flex:2,
        backgroundColor:'fff',
        justifyContent :'center',
        alignItems: 'center'
    },
    containerForm:{
        flex:1,
        backgroundColor: '#ccc',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom:12
    },
    text:{
        color:'#a1a1a1'
    },
    button:{
        position: 'absolute',
        backgroundColor: '#00008B',
        borderRadius: 50,
        paddingVertical: 8,
        width:'15%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        fontSize: 18,
        fontWeight: 'bold'
    }
})