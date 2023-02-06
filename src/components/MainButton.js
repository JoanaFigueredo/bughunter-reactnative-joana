import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  ActivityIndicator,
} from 'react-native';

const MainButton = ({title, onPress, isLoading}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator animating />
      ) : (
        <Text style={styles.buttonLabel}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  container: {
    height: 55,
    backgroundColor: '#EC2127',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonLabel: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
});
