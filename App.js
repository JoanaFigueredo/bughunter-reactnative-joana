import React from 'react';
import WelcomeScreen from './src/screens/WelcomeScreen';
import CreateCharacter from './src/screens/CreateCharacter';
import SignIn from './src/screens/SignIn';
import Home from './src/screens/Home';
// import Store from './src/screens/Store';
import Quests from './src/screens/Quests';
import Battle from './src/screens/Battle';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const AuthStack = createNativeStackNavigator();
const AppStack = createNativeStackNavigator();
const RootStack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="welcome" component={WelcomeScreen} />
      <AuthStack.Screen name="createCharacter" component={CreateCharacter} />
      <AuthStack.Screen name="signIn" component={SignIn} />
      {/* ta errado */}
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="Quests" component={Quests} />
      <AppStack.Screen name="Battle" component={Battle} />
      {/* <AppStack.Screen name="Store" component={Store} /> */}
    </AuthStack.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AppStack.Screen name="Quests" component={Quests} />
      {/* <AppStack.Screen name="Store" component={Store} /> */}
      <AppStack.Screen name="Home" component={Home} />
    </AppStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Screen name="Auth" component={AuthNavigation} />
        <RootStack.Screen name="App" component={AppNavigation} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
