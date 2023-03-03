import React from 'react';
import {Image, StyleSheet} from 'react-native';
import charBack from '../assets/images/character-backend.png';
import charFront from '../assets/images/character-front.png';
import charMobile from '../assets/images/character-mobile.png';

export const ImageCharacter = ({atb}) => {
  if (atb === 'Frontend') {
    return (
      <Image
        style={styles.figureFront}
        source={charFront}
        resizeMode="contain"
      />
    );
  }
  if (atb === 'Backend') {
    return (
      <Image style={styles.figureBack} source={charBack} resizeMode="contain" />
    );
  }
  return (
    <Image style={styles.figure} source={charMobile} resizeMode="contain" />
  );
};

const styles = StyleSheet.create({
  figure: {
    width: 160,
    height: 150,
    transform: [{translateY: 30}, {translateX: 5}, {scale: 1.1}],
  },
  figureFront: {
    width: 160,
    height: 150,
    transform: [{translateY: 20}, {translateX: -18}, {scale: 1.1}],
  },
  figureBack: {
    width: 160,
    height: 150,
    transform: [{translateY: 30}, {translateX: -10}, {scale: 1.1}],
  },
});
