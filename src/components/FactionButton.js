import React from 'react';
import {TouchableOpacity, Image, View, Text, StyleSheet} from 'react-native';

export const FactionButton = ({image, label, borderColor}) => {
  return (
    <TouchableOpacity style={[styles.imgFac, {borderColor}]}>
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
