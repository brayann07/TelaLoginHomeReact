
import Home from './screens/home';
import Login from './screens/login';
import Feed from './screens/feed';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


function BottomTabs(){
  const BottomTab = createBottomTabNavigator();
  return(
    <BottomTab.Navigator screenOptions={{
        animation: "shift",
        headerStyle:{backgroundColor:'#7fafb5'},
        tabBarActiveBackgroundColor:{backgroundColor:'#3fb0bf'},
        tabBarActiveBackgroundColor:'#3fb0bf',
        tabBarInactiveBackgroundColor:'#306d75',
        tabBarStyle:{
        },
        }}
        >
        <BottomTab.Screen name='Home' component={Home}
        options={{
          tabBarIcon : () => <MaterialCommunityIcons name="home" size={24} color="black" />
        }}/>
        <BottomTab.Screen name='Feed' component={Feed}
        options={{
          tabBarIcon : () => <FontAwesome name="feed" size={24} color="black" />
        }}/>
        </BottomTab.Navigator>
    )
}



export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
     <Stack.Navigator>
     <Stack.Screen name='Login' component={Login}/>
     <Stack.Screen name='HomeTab' options={{headerShown:false}} component={BottomTabs}/>

     </Stack.Navigator>
    </NavigationContainer>
  );
}
