import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

import styles from "./src/styles"
import LoginScreen from './src/login';
import ForgotLoginScreen from './src/forgotLogin';
import HomeScreen from './src/home';
import Feature1Screen from './src/feature1';
import Feature2Screen from './src/feature2';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name='Forgot Login' component={ForgotLoginScreen} />
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Feature 1 - Allies' component={Feature1Screen} />
        <Stack.Screen name='Feature 2 - Enemies' component={Feature2Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
