import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import treasure from '../assets/images/treasure.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const QuestsList = ({name, label}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>{name}</Text>
      <View style={styles.treasureValuePlay}>
        <View style={styles.treasureValue}>
          <Image style={styles.figure} source={treasure} resizeMode="contain" />
          <Text style={styles.value}>{label}</Text>
        </View>
        <Icon name="play-circle" size={40} color={'red'} style={styles.play} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'baseline',
    backgroundColor: '#2E2635',
    height: 110,
    padding: 15,
    borderRadius: 10,
    marginBottom: 5,
    width: '100%',
  },
  description: {
    color: 'white',
    fontSize: 23,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  treasureValuePlay: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  treasureValue: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  figure: {
    width: 52,
    height: 43,
    marginRight: 10,
  },
  value: {
    color: '#F3CC30',
    fontSize: 24,
    fontWeight: 'bold',
  },
  play: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
