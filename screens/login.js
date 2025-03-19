import { Touchable, TouchableOpacity } from 'react-native';
import {Text,View,StyleSheet} from 'react-native';
import { Button, TextInput } from 'react-native-web';
export default function Login(){
    return( 
    <View style={styles.container}>
        <br></br><br></br><br></br><br></br>
        <EntradaDeDados/>
        <Final/>
    </View>
    )
}
export function EntradaDeDados(){
    return(
        <View style={styles.meio}>  
        <Text style={styles.textocima}>Nome</Text>
        <TextInput style={styles.entradadedados} placeholder='Nome'></TextInput>
        <Text style={styles.textocima}>Telefone</Text>
        <TextInput style={styles.entradadedados} placeholder='Telefone' secureTextEntry='false'></TextInput>   
        </View>
    )
}
export function Final(){
    return(
        <View style={styles.fim}>
            <br></br><br></br><br></br>
            <TouchableOpacity style={styles.botao}>
             <Text style={{color: 'white', fontSize:26}}>Logar</Text>
            </TouchableOpacity>
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
        flex:1,
        margin:'auto',
        gap:40,
    },
    fim:{
        flex:0.5,
    },
    textocima:{
        flex:1,
        fontSize: 50,
        textAlign:'center',
        marginTop:70,
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
    },
    entradadedados:{
        textAlign:'center',
        alignSelf:'center',
        backgroundColor:'white',
        width:300,
        height:300,
        borderWidth: 3,
        borderRadius: 20,
    }
  })
