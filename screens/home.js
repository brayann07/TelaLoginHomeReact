import {Text,View,Image,StyleSheet, ImageBackground} from 'react-native';
import ImagemFundo from '../assets/fundo.png';

export default function Home(){
    return(
        <View style={styles.container}>
            <ImageBackground style={{flex:1,width:'100%',height:'100%'}}source={ImagemFundo}>
            <br></br><br></br><br></br>
            <Text style={styles.textocima}>Bem vindo a Padaria Satc!<br></br>Aqui tem pães fresquinhos e bolos para qualquer hora do dia!</Text>

            <ImagensPadaria/>

            <Text style={styles.textomeio}>Há uma variedade de bolos para compensar a sua fome pela tarde toda!!!<br></br>Então venha já para a padaria SATC!!</Text>   

            <ImagensPadariaBaixo/>

            <Text style={styles.textofim}>Local:<br></br>Rua SATC<br></br>Bairro Satc<br></br>Aberto das 7:30 às 22:00</Text>  

            </ImageBackground>
        </View>
    )
}
export function ImagensPadaria(){
    return(
        <View style={styles.Imagem1}>
        <Image style={{width:150,height:150,borderWidth:1,borderRadius:30}} source={{uri:'https://amopaocaseiro.com.br/wp-content/uploads/2020/01/pao-caseiro-para-iniciantes_02.jpg'}}></Image>
        <Image style={{width:150,height:150,borderWidth:1,borderRadius:30}} source={{uri:'https://guiadacozinha.com.br/wp-content/uploads/2018/10/paofrancesfolhado.jpg'}}></Image>
        </View>
    )
}
export function ImagensPadariaBaixo(){
    return(
        <View style={styles.Imagem2}>
        <Image style={{width:150,height:150,borderWidth:1,borderRadius:30}} source={{uri:'https://static.itdg.com.br/images/360-240/e3bde312e7e27c8f8b3982c74ba4819c/318292-original.jpg'}}></Image> 
        <Image style={{width:150,height:150,borderWidth:1,borderRadius:30}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDngggdhBTXMtW9Tyh_tMZKYnJONQNWWbqcg&s'}}></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{ 
      flex:1,
      margin:0,
    },
    Imagem1:{
        flex:2,
        flexDirection:'row',
        alignSelf:'center',
        gap:50,
        textAlign:'center',
    },
    Imagem2:{
        flex:2,
        flexDirection:'row',
        alignSelf:'center',
        gap:50,
        textAlign:'center',
    },
    textocima:{
        alignSelf:'flex-start',
        fontSize:20,
        fontFamily:'Arial',
        flex:1,

    },
    textomeio:{
        alignSelf:'flex-end',
        fontSize:20,
        fontFamily:'Arial',
        textAlign:'right',
        flex:1,
    },
    textofim:{
        alignSelf:'center',
        textAlign:'center',
        fontSize:20,
        fontFamily:'Arial',
        flex:1,
    },
  })
