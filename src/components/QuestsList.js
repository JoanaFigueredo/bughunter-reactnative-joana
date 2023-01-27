import React from 'react';
import {Image, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import treasure from '../assets/images/treasure.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

export const QuestsList = ({item: quest}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.description}>{quest.name}</Text>
      <View style={styles.treasureValuePlay}>
        <View style={styles.treasureValue}>
          <Image style={styles.figure} source={treasure} resizeMode="contain" />
          <Text style={styles.value}>{quest.reward}</Text>
        </View>
        <TouchableOpacity>
          <Icon
            name="play-circle"
            size={40}
            color={'red'}
            style={styles.play}
            onPress={() => navigation.navigate('Battle', {quest})}
          />
        </TouchableOpacity>
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
