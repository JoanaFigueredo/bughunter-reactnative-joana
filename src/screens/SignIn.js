import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import MainButton from '../components/MainButton';
import logo from '../assets/images/logo.png';

const SignIn = () => {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnLabel}> - </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.logo}>
        <Image source={logo} resizeMode="contain" style={styles.logoLabel} />
        <Text style={styles.textBH}>Bug Hunter</Text>
      </View>
      <View style={styles.viewSingIn}>
        <Text style={styles.labelViewSingIn}>Entrar</Text>
      </View>
      <View style={styles.input}>
        <TextInput style={styles.inputLabel} placeholder="Nome do personagem" />
      </View>
      <View style={styles.btnSingIn}>
        <MainButton title="Entrar" />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    height: 40,
    width: 40,
    borderRadius: 500,
    backgroundColor: '#2E2635',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft: 20,
  },
  btnLabel: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  logo: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  logoLabel: {
    width: 276,
    height: 138,
  },
  textBH: {
    fontWeight: 'bold',
    fontSize: 32,
    color: 'white',
  },
  viewSingIn: {
    alignItems: 'flex-start',
    marginTop: 60,
    marginLeft: 30,
  },
  labelViewSingIn: {
    fontWeight: 'bold',
    fontSize: 45,
    color: 'white',
  },
  input: {
    width: '84%',
    height: 50,
    backgroundColor: '#D9D9D9',
    borderRadius: 5,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 30,
    marginTop: 20,
  },
  inputLabel: {
    paddingHorizontal: 10,
  },
  btnSingIn: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'flex-end',
    paddingBottom: Platform.OS === 'android' ? 20 : 0,
  },
});