import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  SafeAreaView,
} from 'react-native';
import MainButton from '../components/MainButton';
import SecondButton from '../components/SecondButton';

const WelcomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <View style={styles.imagCont}>
          <Image
            source={require('../assets/images/logo.png')}
            resizeMode="contain"
            style={styles.logo}
          />
          <Text style={styles.textBH}>Bug Hunter</Text>
        </View>
        <View style={styles.containerWelcome}>
          <Text style={styles.textWelcome}>
            Bem-vindo <Text style={styles.textBold}>Caçador!</Text>
          </Text>
          <Text style={styles.text}>
            Enfrente os bugs mais assustadores que você conseguir encontrar e
            ganhe as melhores recompensas!{' '}
          </Text>
        </View>
        <View style={styles.footer}>
          <MainButton
            title="Nova jornada"
            onPress={() => navigation.navigate('createCharacter')}
          />
          <SecondButton onPress={() => navigation.navigate('signIn')} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#11081A',
  },
  container: {
    flex: 1,
  },
  imagCont: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  logo: {
    width: 270,
    height: 135,
  },
  textBH: {
    fontWeight: 'bold',
    fontSize: 32,
    color: 'white',
    fontFamily: 'Poppins-Regular',
  },
  containerWelcome: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  textWelcome: {
    fontSize: 40,
    color: 'white',
    width: 350,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  textBold: {
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
  },
  text: {
    fontSize: 14,
    color: 'white',
    width: 350,
    textAlign: 'center',
    marginTop: 15,
    fontFamily: 'Poppins-Regular',
  },
  footer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
    paddingBottom: Platform.OS === 'android' ? 20 : 0,
  },
});
