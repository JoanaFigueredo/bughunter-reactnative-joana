import {StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import WelcomeScreen from './src/screens/WelcomeScreen';
import CreateCharacter from './src/screens/CreateCharacter';
import SingIn from './src/screens/SingIn';

const App = () => {
  return (
    <SafeAreaView style={styles.main}>
      <CreateCharacter />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#11081A',
  },
});
