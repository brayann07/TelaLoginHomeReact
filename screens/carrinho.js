import { View, Text, Image, StyleSheet, FlatList} from "react-native";
import { useFonts,Raleway_600SemiBold,Raleway_700Bold} from '@expo-google-fonts/raleway';
import { useCarrinho } from "../components/ProviderCarrinho";
import Cards from "../components/Cards";

export default function Carrinho(){
    const [ fontLoaded ] = useFonts({
        Raleway_600SemiBold,
        Raleway_700Bold,
        });
    if(!fontLoaded){
        return false;
    }
    const {carrinho, removerProduto} = useCarrinho();
    return(
        <View style={styles.container}>
        <Text style={{fontFamily:'Raleway_700Bold', fontSize:40,textAlign:'center'}}>Produtos no Carrinho</Text>
        <FlatList
        data={carrinho}
        renderItem={({item, index}) => ( 
         <Cards
            nome={item.nome}
            valor={item.valor}
            img={item.imagem}
            remover = {() => removerProduto(index)}
        />
        )} 
        /> 
        </View>
        )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#5f9ea0',
        margin:0,
        flex:1,
        alignItems:'center'
    },
    painel:{
        flexDirection:'row',
        marginTop:10,
        width:'90%',
        height:'20%',
        backgroundColor:'#446566',
    },
    textoCart:{
        alignItems:'center',
        justifyContent:'center',
        fontFamily:'Raleway_600SemiBold',
        fontSize:30,
    },
    card:{ 
        flexDirection:'row',
        alignSelf:'center',
        width:300,
        height:200,
        backgroundColor: '#93a2c9',  
        borderWidth:1,
        borderRadius: 20,
        alignItems:'center',
        margin:20,
      },
      imagem:{
        borderWidth:1,
        borderRadius:10,
        width:'50%',
        height:'90%',
      }
});