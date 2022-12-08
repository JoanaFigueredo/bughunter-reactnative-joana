import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import logo from '../assets/images/logo.png';
import sword from '../assets/images/icon-sword.png';
import shield from '../assets/images/icon-shield.png';
import heart from '../assets/images/icon-heart.png';
import bug from '../assets/images/bug.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Battle = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <SafeAreaView style={styles.main}>
        <View style={styles.container}>
          <View style={styles.logo}>
            <TouchableOpacity style={styles.btn} onPress={navigation.goBack}>
              <Icon name="arrow-left" size={20} color={'white'} />
            </TouchableOpacity>
            <View style={styles.imgView}>
              <Image
                source={logo}
                resizeMode="contain"
                style={styles.logoLabel}
              />
            </View>
          </View>
          <View style={styles.a}>
            <Image source={bug} resizeMode="contain" style={styles.bugFigure} />
            <View style={styles.section}>
              <Text style={styles.sectionName}>Montro do Lago</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default Battle;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#11081A',
  },
  container: {
    flex: 1,
    margin: 17,
    borderColor: 'red',
    borderWidth: 1,
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoLabel: {
    width: 100,
    height: 80,
  },
  btn: {
    height: 40,
    width: 40,
    borderRadius: 500,
    backgroundColor: '#2E2635',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgView: {
    width: 100,
    height: 80,
    paddingLeft: '25%',
  },
  btnLabel: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  a: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bugFigure: {
    width: 331,
    height: 275,
  },
  section: {
    backgroundColor: '#2E2635',
    height: 45,
    width: 330,
    marginBottom: 1,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionName: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
