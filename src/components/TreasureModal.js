import {StyleSheet, View} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';
import treasure_animation from '../assets/animations/treasure_animation.json';

const TreasureModal = ({animationFinished}) => {
  return (
    <View style={styles.modalCenter}>
      <View style={styles.container}>
        <Lottie
          autoPlay
          source={treasure_animation}
          style={styles.treasureAnimation}
          loop={false}
          onAnimationFinish={animationFinished}
        />
      </View>
    </View>
  );
};

export default TreasureModal;

const styles = StyleSheet.create({
  modalCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#11081A70',
  },
  container: {
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    borderRadius: 10,
  },
  treasureAnimation: {
    width: 350,
  },
});
