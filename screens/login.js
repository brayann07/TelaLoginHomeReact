import { Touchable, TouchableOpacity } from 'react-native';
import {Text,View,StyleSheet, TextInput} from 'react-native';
import { useState } from 'react';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../controller';


import { useFonts,Raleway_100Thin, Raleway_400Regular, Raleway_500Medium } from '@expo-google-fonts/raleway';


export default function Login({navigation}){
    const[email,setEmail] = useState("")
    const[senha,setSenha] = useState("")

    const [ fontLoaded ] = useFonts({
        Raleway_400Regular,
        Raleway_500Medium,
    });
    if(!fontLoaded){
        return false;
    }

    const VerificaUser = () =>{
        signInWithEmailAndPassword(auth,email,senha).
        then(userCredential => {
            console.log('Usuario Logado',userCredential.user.email);
            navigation.navigate('HomeTab');
        })
        .catch((error) => {
            console.log('Erro ao logar',error.message);
        });
    }
    return( 
    <View style={styles.container}>
        <br></br><br></br><br></br><br></br>
        <View style={styles.meio}>  
        <br></br>
        <Text style={styles.textocima}>Login</Text>
        <br></br><br></br><br></br>
        <TextInput style={styles.entradadedados} placeholder='E-mail' value={email} onChangeText={setEmail}></TextInput>
        <br></br>
        <TextInput style={styles.entradadedados} placeholder='Senha' secureTextEntry='false' value={senha} onChangeText={setSenha}></TextInput>   
        </View>
        <View>
            <br></br>
            <TouchableOpacity style={styles.botao} 
            onPress={VerificaUser}>
                <Text style={{color: 'white', fontSize:20}}>Entrar</Text>
            </TouchableOpacity>
            <br></br>
            <TouchableOpacity style={styles.botaoCadastraSe} 
            onPress={() => navigation.navigate('Cadastro')}>
                <Text style={{color: 'black', fontSize:20}}>Cadastro</Text>
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
    },
    botaoCadastraSe:{
        width:200,
        height:60,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
        borderWidth: 2,
        borderRadius: 20,
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
