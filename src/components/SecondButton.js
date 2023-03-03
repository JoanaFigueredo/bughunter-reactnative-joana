import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

const SecondButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.buttonLabel}>Continuar Aventura</Text>
    </TouchableOpacity>
  );
};

export default SecondButton;

const styles = StyleSheet.create({
  container: {
    height: 55,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderWidth: 2,
    borderColor: 'white',
  },
  buttonLabel: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
    fontFamily: 'Poppins-Regular',
  },
});
