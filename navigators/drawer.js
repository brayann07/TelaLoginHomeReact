import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/home';
import Login from './screens/login';
import { createDrawerNavigator } from '@react-navigation/drawer';
export default function Drawer() {

  const Drawer = createDrawerNavigator();

  return (
    
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{
        drawerStyle:{backgroundColor:'white'},
        headerStyle:{backgroundColor:'white'}
       }}
      
      >
        <Drawer.Screen name='Login' component={Login}/>
        <Drawer.Screen name='Home' component={Home}/>
      </Drawer.Navigator >
    </NavigationContainer>


  );
}
