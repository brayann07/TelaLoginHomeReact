import {View, Text, Image, Button, StyleSheet, TouchableOpacity} from 'react-native';
import imagem from '../assets/cachorro.webp';
import ImagemFeed from '../assets/fundofeed.jpg'
import { useFonts,Raleway_100Thin, Raleway_400Regular, Raleway_500Medium, Raleway_600SemiBold, Raleway_900Black_Italic, Raleway_900Black, Raleway_700Bold } from '@expo-google-fonts/raleway';
import { ImageBackground } from 'react-native-web';
export default function Feed(){
    const [ fontLoaded ] = useFonts({
        Raleway_400Regular,
        Raleway_700Bold,
        Raleway_900Black,
        Raleway_600SemiBold,
    });
    if(!fontLoaded){
        return false;
    }
    return(
      <ImageBackground style={{flex:1,width:'100%',height:'100%'}}source={ImagemFeed}>
            <br></br>
            <View style={styles.container}>
            <Text style={styles.titulo}>
                Dogfeed
            </Text>
            <br></br>
            <Image style={{width:250,height:250,borderWidth:1,borderRadius:30}} source={imagem} />

            <Text style={styles.textodomeio}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet nisi vel lectus pellentesque blandit. Nunc et sollicitudin risus. Fusce feugiat magna aliquam tristique euismod. Curabitur pretium, diam nec feugiat viverra, dolor lorem interdum tortor, at imperdiet tellus sapien id turpis.</Text>
            <Text style={styles.textodofim}>
                #dogsempoderados #cachorrao
            </Text>
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Home')}>Saiba Mais!</TouchableOpacity>
        </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    },
    titulo:{
        fontSize:40,
        fontFamily:'Raleway_600SemiBold',
    },
    textodomeio:{
        fontFamily:'Raleway_600SemiBold',
        fontSize:20,
        alignSelf:'center',
    },
    textodofim:{
        fontFamily:'Raleway_600SemiBold',
        fontSize:20,
        alignSelf:'flex-start',
    },
    botao:{
        width:150,
        height:30,
        textAlign:'center',
        margin:'auto',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#c7977d',
        borderWidth: 2,
        borderRadius: 20,
        marginTop: 30,
        fontSize:20,
        fontFamily:'Raleway_600SemiBold',
     },
});