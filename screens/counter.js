import {View, Text,StyleSheet, TouchableOpacity} from 'react-native';
import { useFonts,Raleway_600SemiBold} from '@expo-google-fonts/raleway';
import { useState } from 'react';
import { TextInput } from 'react-native-web';




export default function Counter(){
    const [contador,setContador] = useState(0);
    function Aumentar(){
        setContador(contador + 1);
    }
    function Diminiuir(){
        if(contador >=1){
            setContador(contador - 1);
        }
    }

   /*  FONTES */


    const [ fontLoaded ] = useFonts({
        Raleway_600SemiBold,
    });
    if(!fontLoaded){
        return false;
    }
    return(
     <View style={styles.container}>
        <Text style={{fontSize:50,textAlign:'center'}}>Contador:{contador}<br></br></Text>
        <br></br>
        <View style={{flex:0.2, backgroundColor:'#4b9491',flexDirection:'row'}}>
            <TouchableOpacity style={styles.botao}
            title='+'
            onPress={Aumentar}
        >Mais   
        </TouchableOpacity>
        <br></br>
        <TouchableOpacity style={styles.botao1} 
            title='-'
            onPress={Diminiuir}
        >Menos
        </TouchableOpacity>
        </View>

        <View>
        <TextInput 
        style={styles.entradadedados} 
        placeholder='Nome'>
        </TextInput><br></br>

        <TextInput 
        style={styles.entradadedados} 
        placeholder='Email' 
        secureTextEntry='true'>
        </TextInput> 
        </View>
       

        
     </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        fontFamily:"Raleway_600SemiBold",
        backgroundColor:'#4b9491',
    },
    botao:{
        width:150,
        height:30,
        textAlign:'center',
        margin:'auto',
        backgroundColor:'#c7977d',
        borderWidth: 2,
        borderRadius: 20,
        fontSize:20,
        fontFamily:'Raleway_600SemiBold',
    },
    botao1:{
        width:150,
        height:30,
        textAlign:'center',
        margin:'auto',
        backgroundColor:'#c7977d',
        borderWidth: 2,
        borderRadius: 20,
        fontSize:20,
        fontFamily:'Raleway_600SemiBold',
    },
    entradadedados:{
        textAlign:'center',
        alignSelf:'center',
        backgroundColor:'white',
        width:250,
        fontSize:30,
        height:50,
        borderWidth: 2,
        borderRadius: 20,
        fontFamily:'Raleway_500Medium',
    }
});