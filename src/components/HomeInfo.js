import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';

export const HomeInfo = ({image, name, value, hasBorder}) => {
  return (
    <View style={[styles.section, {borderBottomWidth: hasBorder ? 1 : 0}]}>
      <View style={styles.figureText}>
        <Image style={styles.figure} source={image} resizeMode="contain" />
        <Text style={styles.sectionName}>{name}</Text>
      </View>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    height: 55,
    marginBottom: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    justifyContent: 'space-between',
  },
  figureText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  figure: {
    width: 28,
    height: 28,
    marginRight: 10,
  },
  sectionName: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  value: {
    color: '#3BDA5E',
    flexDirection: 'row',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
