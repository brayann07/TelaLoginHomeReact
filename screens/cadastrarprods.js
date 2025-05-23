
import { Touchable, TouchableOpacity } from 'react-native';
import {Text,View,StyleSheet, TextInput} from 'react-native';
import { useState } from 'react';

import { collection,addDoc,updateDoc,deleteDoc,doc } from 'firebase/firestore';
import { db } from '../controller';


import { useFonts,Raleway_100Thin, Raleway_400Regular, Raleway_500Medium } from '@expo-google-fonts/raleway';


export default function CadastroProds(){

    const[codigo,setCodigo] = useState("")
    const[nome,setNome] = useState("")
    const[valor,setValor] = useState("")
    const[imagem,setImagem] = useState("")

    const cadastrarProduto = async () => {
        // so uma ajudinha externa
          try {
            await addDoc(collection(db, 'produtos'), {nome,valor: parseFloat(valor),imagem});
            console.log('cadastrado no db!');
            setNome('');
            setValor('');
            setImagem('');
        } catch (error) {
            console.log("Erro", error);
        }
    };
   
    const alterarProduto = async (id) => {
        try {
            const produtoRef = doc(db, 'produtos', id);
            await updateDoc(produtoRef, {
                nome,
                valor: parseFloat(valor),
                imagem
            });
            console.log('altero!!');
            setNome('');
            setValor('');
            setImagem('');
        } catch (error) {
            console.log("nao altero:", error);
        }
    };
    const [ fontLoaded ] = useFonts({
        Raleway_400Regular,
        Raleway_500Medium,
    });
    if(!fontLoaded){
        return false;
    }
    return( 
    <View style={styles.container}>
        <Text style={styles.textocima}>Cadastro Produtos</Text>
        <TextInput style={styles.entradadedados} placeholder='Codigo' value={codigo} onChangeText={setCodigo}/>
        <TextInput style={styles.entradadedados} placeholder='Nome' value={nome} onChangeText={setNome}/>
        <TextInput style={styles.entradadedados} placeholder='Valor' value={valor} onChangeText={setValor}/>
        <TextInput style={styles.entradadedados} placeholder='Imagem em URL' value={imagem} onChangeText={setImagem}/>
        <TouchableOpacity style={styles.botaoCadastraSe} onPress={cadastrarProduto}>
            <Text style={{textAlign:'center',fontSize:20}}>
                Cadastrar
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoCadastraSe} onPress={alterarProduto}>
            <Text style={{textAlign:'center',fontSize:20}}>
                Alterar
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoCadastraSe} onPress={cadastrarProduto}>
            <Text style={{textAlign:'center',fontSize:20}}>
                Excluir
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoCadastraSe} onPress={cadastrarProduto}>
            <Text style={{textAlign:'center',fontSize:20}}>
                Pesquisar
            </Text>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{ 
      backgroundColor:'#5f9ea0',
      flex:1,
      alignItems: 'center',
      fontFamily:'Raleway_500Medium',
    },
    entradadedados:{
        marginTop:30,
        textAlign:'center',
        backgroundColor:'white',
        width:300,
        height:100,
        fontSize:30,
        borderWidth: 2,
        borderRadius: 20,
        fontFamily:'Raleway_500Medium',
    },
    textocima:{
        fontSize: 40,
        textAlign:'center',
        fontFamily: 'Raleway_500Medium',
        color:'white',
    },
    botaoCadastraSe:{
        marginTop:10,
        width:200,
        height:60,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#4169E1',
        borderWidth: 2,
        borderRadius: 20,
    },
  })
