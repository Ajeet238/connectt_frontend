import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@/components/AppComponent/HomeScreen';
import SignInScreen from '@/components/AppComponent/SignInScreen';
import { RootStackParamList } from '@/components/AppComponent/type';


const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    // <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default App;
