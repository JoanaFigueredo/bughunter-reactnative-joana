import {StyleSheet, View} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';
import gameOver from '../assets/animations/game_over.json';

const GameOverModal = ({animationFinished}) => {
  return (
    <View style={styles.modalCenter}>
      <View style={styles.container}>
        <Lottie
          autoPlay
          source={gameOver}
          style={styles.treasureAnimation}
          loop={false}
          onAnimationFinish={animationFinished}
        />
      </View>
    </View>
  );
};

export default GameOverModal;

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
