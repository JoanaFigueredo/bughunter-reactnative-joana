import React from 'react';
import {Image, StyleSheet} from 'react-native';
import charBack from '../assets/images/character-backend.png';
import charFront from '../assets/images/character-front.png';
import charMobile from '../assets/images/character-mobile.png';

export const CharacterBattleStart = ({atb}) => {
  if (atb === 'Frontend') {
    return (
      <Image style={styles.figure} source={charFront} resizeMode="contain" />
    );
  }
  if (atb === 'Backend') {
    return (
      <Image style={styles.figure} source={charBack} resizeMode="contain" />
    );
  }
  return (
    <Image style={styles.figure} source={charMobile} resizeMode="contain" />
  );
};

const styles = StyleSheet.create({
  figure: {
    width: 170,
    height: 170,
  },
});
