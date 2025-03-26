import { Touchable, TouchableOpacity } from 'react-native';
import {Text,View,StyleSheet} from 'react-native';
import { Button, TextInput } from 'react-native-web';
import Home from './home';

export default function Login({navigation}){
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
            onPress={() => navigation.navigate('Home')}
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
      fontFamily:'Arial',
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
        fontFamily: 'Arial',
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
    }
  })
