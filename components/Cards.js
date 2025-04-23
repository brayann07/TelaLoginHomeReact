import {View, Text, StyleSheet, Image} from 'react-native'
import { useFonts,Raleway_600SemiBold,Raleway_700Bold} from '@expo-google-fonts/raleway';

export default function Cards({nome,valor,img}){
    const [ fontLoaded ] = useFonts({
        Raleway_600SemiBold,
        Raleway_700Bold,
    });
    return(
        <View style={styles.card}>
            <Text style={styles.textoTexto}>{nome}</Text>
            <Text style={styles.textoTexto}>R${valor}.00</Text>  
            <Image source={{uri:img}} style={{width:200,height:100}}></Image>
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
      alignSelf:'center',
      width:300,
      height:200,
      backgroundColor: '#93a2c9',  
      borderRadius: 10,
      alignItems:'center',
      margin:20,
    },
})