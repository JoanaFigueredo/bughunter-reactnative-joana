import {
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from 'react-native';
import React from 'react';
import WelcomeScreen from './src/screens/WelcomeScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.main}>
      <WelcomeScreen />
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
