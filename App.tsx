import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Home from './src/screens/home';
import ProductScreen from './src/screens/productScreen';

const Stack = createNativeStackNavigator();

const App=()=> {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home' screenOptions={{headerShown:false, animation:"none"}}>
      <Stack.Screen name="home" component={Home}/>
        <Stack.Screen name="Product Screen" component={ProductScreen} options={{headerShown:true}}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
export default App;
