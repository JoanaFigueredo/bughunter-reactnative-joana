import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';

export const StoreChoises = ({image, name, label}) => {
  return (
    <View style={styles.figureValue}>
      <Image style={styles.figure} source={image} resizeMode="contain" />
      <Text style={styles.value}>{label}</Text>
      <Text style={styles.bar}>|</Text>
      <Text style={styles.description}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  figureValue: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2E2635',
    height: 55,
    padding: 15,
    borderRadius: 10,
    marginBottom: 5,
  },
  figure: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  value: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bar: {
    color: '#11081A',
    fontSize: 16,
    marginLeft: 10,
  },
  description: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
});
