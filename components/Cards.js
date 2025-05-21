import {View, Text, StyleSheet, Image, TouchableOpacity, Button} from 'react-native'
import { useFonts,Raleway_600SemiBold,Raleway_700Bold} from '@expo-google-fonts/raleway';
export default function Cards({nome,valor,img, comprar}){
    const [ fontLoaded ] = useFonts({
        Raleway_600SemiBold,
        Raleway_700Bold,
    });
    return(
        <View style={styles.card}>
            <View style={{textAlign:'center'}}>
            <Image source={{uri:img}} style={{width:180,height:150,borderWidth:1,borderRadius:30}}></Image>
            </View>
            <View style={{textAlign:'center',flex:1,}}>
                <Text style={styles.textoTexto}>{nome}</Text>
                <Text style={styles.textoTexto}>R${valor}</Text>   
                <TouchableOpacity style={{width:90,height:50, backgroundColor:'#3d3d69', borderRadius:20,alignItems:'center',justifyContent: 'center'}} onPress={comprar}>
                     <Text style={{textAlign:'center', fontFamily:'Raleway_700Bold', fontSize:23}}>Comprar</Text>
                </TouchableOpacity>
            </View>
           
        </View>
    )
}
const styles = StyleSheet.create({
    textoTexto:{
        textAlign:'center',
        fontSize:30,
        fontFamily:'Raleway_700Bold',
    },
    card:{ 
      flexDirection:'row',
      alignSelf:'center',
      width:300,
      height:200,
      backgroundColor: '#93a2c9',  
      borderRadius: 10,
      alignItems:'center',
      margin:20,
    },
})