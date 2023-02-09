import React from 'react';
import {Image, Text, StyleSheet, View} from 'react-native';

export const HomeFooter = ({image, name, navigation}) => {
  return (
    <View style={styles.sectionFooter}>
      <Image style={styles.figureFooter} source={image} resizeMode="contain" />
      <Text style={styles.textFooter}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionFooter: {
    backgroundColor: '#2E2635',
    height: 82,
    width: '100%',
    marginTop: 25,
    borderRadius: 14,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  figureFooter: {
    width: 100,
    height: 100,
    transform: [{translateY: -9}],
  },
  textFooter: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
