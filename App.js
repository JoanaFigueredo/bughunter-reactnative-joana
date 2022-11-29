import React from 'react';
import WelcomeScreen from './src/screens/WelcomeScreen';
import CreateCharacter from './src/screens/CreateCharacter';
import SignIn from './src/screens/SignIn';
import Home from './src/screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const AuthStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <AuthStack.Screen name="welcome" component={WelcomeScreen} />
        <AuthStack.Screen name="createCharacter" component={CreateCharacter} />
        <AuthStack.Screen name="signIn" component={SignIn} />
        <AuthStack.Screen name="Home" component={Home} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
