import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/home';
import Login from './screens/login';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
export default function Material() {

  const Material = createMaterialTopTabNavigator();
  const Drawer = createDrawerNavigator();
  return (
    
    <NavigationContainer>

      <Material.Navigator screenOptions={{
        drawerStyle:{backgroundColor:'white'},
        headerStyle:{backgroundColor:'white'}
       }}>
        <Material.Screen name='Login' component={Login}/>
        <Material.Screen name='Home' component={Home}/>
      </Material.Navigator>

      

    </NavigationContainer>


  );
}