
import Gallery, { Favorites, Profile} from './components/Gallery';
import {View, StyleSheet, ScrollView , Text} from 'react-native'
import Home from './screens/home';
import Login from './screens/login';
import 'react-native-gesture-handler';
export default function App() {
  return (
    <View style={styles.container}>
    
    {/* <Home/> descomenta para ver o home! */}
    </View>
  );
};

const styles = StyleSheet.create({
  container:{ //serve para ocupar toda tela
    flex:1,
  },
})