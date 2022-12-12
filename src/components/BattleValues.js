import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';

export const BattleValues = ({value, image}) => {
  return (
    <View style={styles.container}>
      <Image source={image} resizeMode="contain" style={styles.img} />
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 100,
    height: 100,
  },
  img: {
    width: 53,
    height: 54,
  },
  value: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
