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
import treasure from '../assets/images/treasure.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MainButton from '../components/MainButton';
import {BattleValues} from '../components/BattleValues';

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
          <View style={styles.containerFigure}>
            <Image source={bug} resizeMode="contain" style={styles.bugFigure} />
            <View style={styles.sectionBugName}>
              <Text style={styles.labelBugName}>Montro do Lago</Text>
            </View>
          </View>
          <View style={styles.containerImages}>
            <BattleValues image={shield} value="40" />
            <BattleValues image={heart} value="20" />
            <BattleValues image={sword} value="10" />
          </View>
          <View style={styles.treasure}>
            <Image source={treasure} resizeMode="contain" style={styles.img} />
            <Text style={styles.valueTreasure}>50</Text>
          </View>
          <MainButton title="Lutar" />
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
  containerFigure: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bugFigure: {
    width: 331,
    height: 275,
  },
  sectionBugName: {
    backgroundColor: '#2E2635',
    height: 45,
    width: 330,
    marginBottom: 1,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelBugName: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  img: {
    width: 53,
    height: 54,
  },
  containerImages: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  valueTreasure: {
    color: '#F3CC30',
    fontSize: 20,
    fontWeight: 'bold',
  },
  treasure: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 90,
  },
});
