import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/home';
import Login from './screens/login';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';

export default function App() {
  const Material = createMaterialTopTabNavigator();
  const Bottom = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Bottom.Navigator screenOptions={{
      animation: "fade",
      headerStyle:{backgroundColor:'#7fafb5'},
      tabBarActiveBackgroundColor:{backgroundColor:'#3fb0bf'},
      tabBarActiveBackgroundColor:'#3fb0bf',
      tabBarInactiveBackgroundColor:'#306d75',
      
      tabBarStyle:{
      },
      }}
      >
      <Bottom.Screen name='Login' component={Login} 
      options={{
        tabBarIcon : () => <MaterialCommunityIcons name="home" size={24} color="black" />
      }}/>
      <Bottom.Screen name='Home' component={Home}
      options={{
        tabBarIcon : () => <Entypo name="login" size={24} color="black" />
      }}/>
      </Bottom.Navigator>
    </NavigationContainer>
  );
}
export function MaterialView(){
  return(
    <Material.Navigator screenOptions={{
      drawerStyle:{backgroundColor:'white'},
      headerStyle:{backgroundColor:'white'}
     }}>
      <Material.Screen name='Login' component={Login}/>
      <Material.Screen name='Home' component={Home}/>
    </Material.Navigator>
  )
}
export function BottomView(){
  
  return(
    <Bottom.Navigator screenOptions={{
      tabBarStyle:{backgroundColor:'white'},
      headerStyle:{backgroundColor:'white'}}}>
      <Bottom.Screen name='Login' component={Login}/>
      <Bottom.Screen name='Home' component={Home}/>
      </Bottom.Navigator>
  )
}