import React from 'react';
import {TouchableOpacity, Image, View, Text, StyleSheet} from 'react-native';
import cross from '../assets/images/cross.png';
import hat from '../assets/images/helmet.png';
import ship from '../assets/images/boat.png';

const factionType = {
  Frontend: {
    color: '#38116A',
    image: cross,
  },
  Backend: {
    color: '#132109',
    image: hat,
  },
  Mobile: {
    color: '#402A07',
    image: ship,
  },
};

export const FactionButton = ({label, isSelected, ...props}) => {
  const color = factionType[label].color;
  const image = factionType[label].image;
  return (
    <TouchableOpacity
      style={[
        styles.imgFac,
        {
          borderColor: color,
          backgroundColor: isSelected ? color : 'transparent',
        },
      ]}
      {...props}>
      <Image source={image} resizeMode="contain" style={styles.pictureSize} />
      <View style={styles.textView}>
        <Text style={styles.nameFac}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imgFac: {
    borderWidth: 2,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 115,
    height: 150,
  },
  textView: {
    alignSelf: 'center',
    width: '100%',
    alignItems: 'center',
  },
  pictureSize: {
    width: 50,
    height: 90,
  },
  nameFac: {
    color: 'white',
    fontSize: 16,
  },
});
