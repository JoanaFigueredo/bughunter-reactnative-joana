import React from 'react';
import WelcomeScreen from '../screens/WelcomeScreen';
import CreateCharacter from '../screens/CreateCharacter';
import SignIn from '../screens/SignIn';
import Home from '../screens/Home';
import Quests from '../screens/Quests';
import Store from '../screens/Store';
import Battle from '../screens/Battle';
import EquipmentsList from '../screens/EquipmentsList';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthProvider, useAuthContext} from '../contexts/AuthContext';
import StartBattle from '../screens/StartBattle';

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
    </AuthStack.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="Store" component={Store} />
      <AppStack.Screen name="Battle" component={Battle} />
      <AppStack.Screen name="Quests" component={Quests} />
      <AppStack.Screen name="EquipmentsList" component={EquipmentsList} />
      <AppStack.Screen name="StartBattle" component={StartBattle} />
    </AppStack.Navigator>
  );
};

const Navigator = () => {
  const {user} = useAuthContext();
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {user !== null ? (
          <RootStack.Screen name="App" component={AppNavigation} />
        ) : (
          <RootStack.Screen name="Auth" component={AuthNavigation} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
