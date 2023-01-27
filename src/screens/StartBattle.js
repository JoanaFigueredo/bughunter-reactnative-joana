import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import background from '../assets/images/background-battle.png';
import character from '../assets/images/character-backend.png';
import bug from '../assets/images/character-bug-2.png';
import sword from '../assets/images/icon-sword.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const StartBattle = ({navigation}) => {
  return (
    <ImageBackground source={background} style={styles.background}>
      <View style={styles.container}>
        <SafeAreaView style={styles.main}>
          <View style={styles.characterBug}>
            <Image
              source={character}
              resizeMode="contain"
              style={styles.character}
            />
            <Image source={bug} resizeMode="contain" style={styles.bug} />
          </View>
          <View style={styles.footer}>
            <TouchableOpacity style={styles.btn1} onPress={navigation.goBack}>
              <Icon name="run" size={40} color={'white'} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn2}>
              <Image source={sword} resizeMode="contain" style={styles.sword} />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};

export default StartBattle;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  characterBug: {
    flex: 2,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  character: {
    width: 170,
    height: 170,
  },
  bug: {
    width: 150,
    height: 150,
    transform: [{translateY: 17}],
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    padding: 18,
    flex: 1,
  },
  btn1: {
    height: 60,
    width: 60,
    borderRadius: 500,
    backgroundColor: '#EC2127',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft: 20,
  },
  btn2: {
    height: 98,
    width: 98,
    borderRadius: 500,
    backgroundColor: '#F3CC30',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft: 20,
  },
  sword: {
    height: 40,
    width: 41,
  },
});
