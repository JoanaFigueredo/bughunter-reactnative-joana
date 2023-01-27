import React from 'react';
import {AuthProvider} from './src/contexts/AuthContext';
import Navigator from './src/routes';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <AuthProvider>
      <Navigator />
      <Toast />
    </AuthProvider>
  );
};

export default App;
