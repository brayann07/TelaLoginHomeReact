import {Text,View,Image,StyleSheet} from 'react-native';

export function Profile(){
    return(
      <View style={styles.profile}>
        <Text style={styles.textoauxiliar}>Sorvete de Pistache</Text>
        
      <ImagensAleatorias/>
        <Text style={{ fontSize: 30, fontFamily: "Arial",alignSelf:'flex-end',alignSelf:'flex-end',flex:1}}> Os melhores sorvetes!</Text>

      <ImagensAleatorias2/>

       <Text style={styles.texto}>Compre já!!</Text>
      </View>
    );
  }
export function ImagensAleatorias(){
  return(
    <View style={styles.imagensA}> 
    <Image style={{width:150,height:150,borderWidth:1,borderRadius:30}} source={{uri:'https://minhasreceitinhas.com.br/wp-content/uploads/2023/03/Sorvete-de-pistache-1.png'}}></Image>

      <Image style={{width:150,height:150,borderWidth:1,borderRadius:30}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgQiwogsuglbSof3CA0_WGU51uiNuJwxpLMw&s'}}></Image>
    </View>
  )
}
export function ImagensAleatorias2(){
  return(
    <View style={styles.imagensA}> 
    <Image style={{width:150,height:150,borderWidth:1,borderRadius:30}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFC1qDxRFUI4qR7S1E5m99KavEXniYjYzxNQ&s'}}></Image>

      <Image style={{width:150,height:150,borderWidth:1,borderRadius:30}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY3lpF-Rcoy2T_bUnJu6RWuQnRStvKx37OpIzfCKSUSn4zLn_JsIjRYug4KWYjDEuB5ls&usqp=CAU'}}></Image>
    </View>
  )
}
export function Favorites(){
  return(
    <View style={styles.favorites}>
      <Text style={styles.texto}> Favorites!</Text>
      <Image style={{width:100,height:100}} source={{uri:'https://img1.picmix.com/output/pic/normal/9/1/9/2/5242919_e361c.gif'}}></Image>
      <Image style={{width:100,height:100,alignSelf:'flex-end'}} source={{uri:'https://img1.picmix.com/output/pic/normal/9/1/9/2/5242919_e361c.gif'}}></Image>
    </View>
    
  )
}
export default function Gallery(){
    return(
      <View style={styles.container}>
        <Profile/>
      </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    textoauxiliar:{
      marginTop:90,
      fontSize: 30,
      fontFamily: "Arial",
    },
    texto:{
      fontSize: 30,
      fontFamily: "Arial",
      alignSelf:'center',
    },
    profile:{
      flex:1,
      backgroundColor:'#FFDB58',
      justifyContent:'center',
    },
    favorites:{
      flex:1,
      backgroundColor:'#bd88e3',
      textAlign:'center',
    },
    img:{
      width:250,
      height:250,
    },
    imagensA:{
      flex:2,
      flexDirection:'row',
      alignSelf:'center',
      gap:50,
      textAlign:'center',
    },
})
  
