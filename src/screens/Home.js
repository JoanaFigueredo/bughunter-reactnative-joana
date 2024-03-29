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
import agility from '../assets/images/icon-agility.png';
import treasure from '../assets/images/treasure.png';
import quest from '../assets/images/quest.png';
import chest from '../assets/images/chest.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {HomeInfo} from '../components/HomeInfo';
import {HomeFooter} from '../components/HomeFooter';
import {ImageCharacter} from '../components/ImageCharacter';
import {useAuthContext} from '../contexts/AuthContext';
import Lottie from 'lottie-react-native';

const Home = ({navigation}) => {
  const {logOut, user} = useAuthContext();

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <View style={styles.logo}>
          <TouchableOpacity style={styles.btn} onPress={logOut}>
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
        <View style={styles.containerImg}>
          <ImageCharacter atb={user.factions[0].name} />
          <View style={styles.nameCharacterContainer}>
            <Text
              // adjustsFontSizeToFit
              numberOfLines={1}
              style={styles.nameCharacter}>
              {user.name}
            </Text>
            <View style={styles.coinCash}>
              <Image
                source={coin}
                resizeMode="contain"
                style={styles.coinLabel}
              />
              <Text style={styles.cash}>{user.gold}</Text>
            </View>
          </View>
        </View>
        <View style={styles.viewSection}>
          <HomeInfo image={sword} name="Ataque" value={user.atk} hasBorder />
          <HomeInfo image={shield} name="Defesa" value={user.def} hasBorder />
          <HomeInfo image={agility} name="Agilidade" value={user.hp} />
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('EquipmentsList')}>
            <HomeFooter image={chest} name={'Equipamentos'} />
          </TouchableOpacity>
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
  logoLabel: {
    width: 100,
    height: 80,
  },
  containerImg: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -20,
  },
  nameCharacterContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingLeft: 3,
    flex: 1,
  },
  nameCharacter: {
    fontWeight: 'bold',
    fontSize: 35,
    color: 'white',
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    textAlignVertical: 'center',
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
    fontFamily: 'Poppins-Regular',
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
