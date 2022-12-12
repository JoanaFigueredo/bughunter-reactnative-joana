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
import coin from '../assets/images/coin.png';
import sword from '../assets/images/icon-sword.png';
import shield from '../assets/images/icon-shield.png';
import heart from '../assets/images/icon-heart.png';
import treasure from '../assets/images/treasure.png';
import quest from '../assets/images/quest.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {HomeInfo} from '../components/HomeInfo';
import {HomeFooter} from '../components/HomeFooter';

const Home = ({navigation}) => {
  return (
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
        <View style={styles.nameCharacter}>
          <Text style={styles.labelNameCharacter}>Richarlison Pombo</Text>
          <View style={styles.coinCash}>
            <Image
              source={coin}
              resizeMode="contain"
              style={styles.coinLabel}
            />
            <Text style={styles.cash}>409</Text>
          </View>
        </View>
        <View style={styles.viewSection}>
          <HomeInfo image={sword} name="Ataque" value="100" hasBorder />
          <HomeInfo image={shield} name="Defesa" value="50" hasBorder />
          <HomeInfo image={heart} name="Vida" value="100" />
        </View>
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => navigation.navigate('Store')}>
            <HomeFooter image={treasure} name={'Loja'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Quests')}>
            <HomeFooter image={quest} name={'Quests'} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

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
  nameCharacter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  labelNameCharacter: {
    fontWeight: 'bold',
    fontSize: 32,
    color: 'white',
  },
  coinCash: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coinLabel: {
    width: 16,
    height: 16,
  },
  cash: {
    color: '#F3CC30',
    flexDirection: 'row',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 9,
  },
  viewSection: {
    backgroundColor: '#2E2635',
    borderRadius: 10,
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
