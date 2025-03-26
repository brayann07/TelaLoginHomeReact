import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/home';
import Login from './screens/login';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HeaderStyleInterpolators } from '@react-navigation/stack';
export default function Bottom() {

  const Bottom = createBottomTabNavigator();

  return (
    
    <NavigationContainer>
      <Bottom.Navigator screenOptions={{
        tabBarStyle:{backgroundColor:'black'},
        headerStyle:{backgroundColor:'white'}
       }}
      
      >
        <Bottom.Screen name='Login' component={Login}/>
        <Bottom.Screen name='Home' component={Home}/>
      </Bottom.Navigator >
    </NavigationContainer>


  );
}
