import { View,Text,StyleSheet, FlatList ,ImageBackground, Image} from 'react-native'
import Cards from '../components/Cards';
import ImagemFeed from '../assets/fundofeed.jpg'
import { useState } from 'react';
import { useFonts,Raleway_600SemiBold,Raleway_700Bold} from '@expo-google-fonts/raleway';

export default function Produtos(){
    const [produto,setProdutos] = useState([
        {id:1, nome: 'Osso', valor : 10.00, img:'https://www.petz.com.br/blog/wp-content/uploads/2021/12/cachorro-pode-comer-osso-de-galinha.jpg'},
        {id:2, nome: 'Fantasia', valor : 8.00, img:'https://i.pinimg.com/564x/f0/06/38/f0063879efc56003dbb1f2c3e5122802.jpg'},
        {id:3, nome: 'Batata', valor : 12.00, img:'https://blog-static.petlove.com.br/wp-content/uploads/2018/12/cachorro-batata.jpg'},
    ])
    const [ fontLoaded ] = useFonts({
            Raleway_600SemiBold,
            Raleway_700Bold,
        });
        if(!fontLoaded){
            return false;
        }
    return(
        <View style={styles.container}>
            <ImageBackground source={ImagemFeed} style={{flex:1,width:'100%',height:'100%'}}>
                <Text style={styles.textoTitulo}>Produtos do PetShop</Text>

                {/*  array com metodo */}
                {/* {produto.map((item) => (
                    <Text style={{textAlign:'center',fontSize:30,fontFamily:'Raleway_700Bold'}}>
                        {item.nome} - R$ {item.valor}
                    </Text>
                ))} */}
                <FlatList showsVerticalScrollIndicator={false}
                    data={produto}
                    renderItem={({item}) => (
                        <Cards
                        nome={item.nome}
                        valor={item.valor}
                        img={item.img}
                        />
                    )}
                    keyExtractor={item => item.id}
                />
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        margin:0,
        flex:1,
        fontFamily:'Raleway_700Bold',
        
    },
    textoTitulo:{
        fontSize: 40,
        fontFamily:'Raleway_700Bold',
        textAlign: 'center',
        color: '#030c24',
    },
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
});
    

