import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import sword from '../assets/images/icon-sword.png';
import shield from '../assets/images/icon-shield.png';
import agility from '../assets/images/icon-agility.png';

export const Equipments = ({item}) => {
  const image = () => {
    if (item.affected_attribute === 'def') {
      return (
        <Image style={styles.figure} source={shield} resizeMode="contain" />
      );
    }
    if (item.affected_attribute === 'atk') {
      return (
        <Image style={styles.figure} source={sword} resizeMode="contain" />
      );
    }
    if (item.affected_attribute === 'agi') {
      return (
        <Image style={styles.figure} source={agility} resizeMode="contain" />
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.equipmentValue}>
        {image()}
        <Text style={styles.value}>+{item.affected_amount}</Text>
        <Text style={styles.bar}>| </Text>
        <Text style={styles.description} numberOfLines={1}>
          {item.name}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2E2635',
    height: 65,
    padding: 15,
    borderRadius: 10,
    marginBottom: 5,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  equipmentValue: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingRight: 15,
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
    flex: 1,
    alignItems: 'center',
  },
});
