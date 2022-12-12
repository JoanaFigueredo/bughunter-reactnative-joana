import React from 'react';
import {Image, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const StoreChoises = ({image, name, label}) => {
  return (
    <View style={styles.container}>
      <View style={styles.figureValue}>
        <Image style={styles.figure} source={image} resizeMode="contain" />
        <Text style={styles.value}>{label}</Text>
        <Text style={styles.bar}>|</Text>
        <Text style={styles.description}>{name}</Text>
      </View>
      <TouchableOpacity style={styles.btnCart}>
        <Icon name="cart" size={20} color={'#8F00FF'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2E2635',
    height: 55,
    padding: 15,
    borderRadius: 10,
    marginBottom: 5,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  figureValue: {
    flexDirection: 'row',
    alignItems: 'center',
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
  btnCart: {
    height: 34,
    width: 34,
    borderRadius: 10,
    backgroundColor: '#1E1725',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
