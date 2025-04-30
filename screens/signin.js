import { Touchable, TouchableOpacity } from 'react-native';
import {Text,View,StyleSheet, TextInput} from 'react-native';
import { useState } from 'react';
import Home from './home';

import { createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
import { auth } from '../controller';
import { useFonts,Raleway_100Thin, Raleway_400Regular, Raleway_500Medium } from '@expo-google-fonts/raleway';

export default function Cadastro({navigation}){
    const[email,setEmail] = useState("")
    const[senha,setSenha] = useState("")

    const cadastroUser = () => {
        createUserWithEmailAndPassword(auth,email,senha).then((userCredential) => {
            console.log('Cadastrado!',
            userCredential.user.email);
            navigation.navigate('Login');
          })
          .catch((error) => {
            console.log('Erro!',error.message)
          });
    }
    const [ fontLoaded ] = useFonts({
            Raleway_400Regular,
            Raleway_500Medium,
        });
        if(!fontLoaded){
            return false;
        }

    return( 
    <View style={styles.container}>
        <br></br><br></br><br></br><br></br>
        <View style={styles.meio}>  
        <br></br>
        <Text style={styles.textocima}>Cadastro</Text>
        <br></br><br></br><br></br>
        <TextInput style={styles.entradadedados} placeholder='E-mail' value={email} onChangeText={setEmail}></TextInput>
        <br></br>
        <TextInput style={styles.entradadedados} placeholder='Senha' secureTextEntry='false' value={senha} onChangeText={setSenha}></TextInput>   
        </View>
        <br></br>
        <View>
            <TouchableOpacity style={styles.botao} 
            >
             <Text style={{color: 'white', fontSize:20}}>Logar</Text>
            </TouchableOpacity>
            <br></br>
            <TouchableOpacity style={styles.botao} 
                onPress={() => navigation.navigate('Login')}>
                <Text style={{color: 'white', fontSize:20}}
                onPress={cadastroUser}

                >Cadastre-se</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{ 
      backgroundColor:'#5f9ea0',
      flex:1,
      alignItems: 'center',
      fontFamily:'Raleway_500Medium',
    },
    textocima:{
        fontSize: 40,
        textAlign:'center',
        fontFamily: 'Raleway_500Medium',
        color:'white',
    },
    botao:{
       width:200,
       height:60,
       alignItems:'center',
       justifyContent:'center',
       backgroundColor:'#4169E1',
       borderWidth: 2,
       borderRadius: 20,
       textAlign:'center',
    },
    entradadedados:{
        textAlign:'center',
        backgroundColor:'white',
        width:300,
        height:100,
        fontSize:30,
        borderWidth: 2,
        borderRadius: 20,
        fontFamily:'Raleway_500Medium',
    }
  })