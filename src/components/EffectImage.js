import React from 'react';
import {Image, StyleSheet} from 'react-native';
import sword from '../assets/images/icon-sword.png';
import shield from '../assets/images/icon-shield.png';
import agility from '../assets/images/icon-agility.png';

export const EffectImage = ({atb}) => {
  if (atb === 'def') {
    return <Image style={styles.figure} source={shield} resizeMode="contain" />;
  }
  if (atb === 'atk') {
    return <Image style={styles.figure} source={sword} resizeMode="contain" />;
  }
  return <Image style={styles.figure} source={agility} resizeMode="contain" />;
};

const styles = StyleSheet.create({
  figure: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
});
