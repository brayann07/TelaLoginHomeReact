import { Touchable, TouchableOpacity } from 'react-native';
import {Text,View,StyleSheet, TextInput} from 'react-native';

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
        
        <Text style={styles.textocima}>Login</Text>
        <TextInput style={styles.entradadedados} placeholder='Nome'></TextInput>
        <TextInput style={styles.entradadedados} placeholder='Telefone' secureTextEntry='false'></TextInput>   
        </View>
        <View style={styles.fim}>
            <br></br>
            <TouchableOpacity style={styles.botao} 
            onPress={() => navigation.navigate('HomeTab')}
            >
             <Text style={{color: 'white', fontSize:20}}>Logar</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{ 
      backgroundColor:'#5f9ea0',
      flex:1,
      fontFamily:'Raleway_500Medium',
    },
    meio:{
        flex:0.5,
        margin:'auto',
        gap:40,
    },
    fim:{
        flex:1.2,
        
    },
    textocima:{
        flex:1,
        fontSize: 40,
        textAlign:'center',
        marginTop:10,
        fontFamily: 'Raleway_500Medium',
        color:'white',
    },
    botao:{
       width:200,
       height:60,
       textAlign:'center',
       margin:'auto',
       alignItems:'center',
       justifyContent:'center',
       backgroundColor:'#4169E1',
       borderWidth: 2,
       borderRadius: 20,
       marginTop: 150,
    },
    entradadedados:{
        textAlign:'center',
        alignSelf:'center',
        backgroundColor:'white',
        width:300,
        fontSize:30,
        height:500,
        borderWidth: 2,
        borderRadius: 20,
        fontFamily:'Raleway_500Medium',
    }
  })
