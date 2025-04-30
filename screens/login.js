import { Touchable, TouchableOpacity } from 'react-native';
import {Text,View,StyleSheet, TextInput} from 'react-native';

import Cadastro from './signin';
import Home from './home';

import { useFonts,Raleway_100Thin, Raleway_400Regular, Raleway_500Medium } from '@expo-google-fonts/raleway';
export default function Login({navigation}){
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
        <Text style={styles.textocima}>Login</Text>
        <br></br><br></br><br></br>
        <TextInput style={styles.entradadedados} placeholder='Nome'></TextInput>
        <br></br>
        <TextInput style={styles.entradadedados} placeholder='Telefone' secureTextEntry='false'></TextInput>   
        </View>
        <View>
            <br></br>
            <TouchableOpacity style={styles.botao} 
            onPress={() => navigation.navigate('HomeTab')}>
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
