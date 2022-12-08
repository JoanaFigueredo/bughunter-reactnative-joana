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

const Home = ({navigation}) => {
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
            <View style={styles.section}>
              <View style={styles.figureText}>
                <Image
                  style={styles.figure}
                  source={sword}
                  resizeMode="contain"
                />
                <Text style={styles.sectionName}>Ataque</Text>
              </View>
              <Text style={styles.value}>100</Text>
            </View>
            <View style={styles.sectionMiddle}>
              <View style={styles.figureText}>
                <Image
                  style={styles.figure}
                  source={shield}
                  resizeMode="contain"
                />
                <Text style={styles.sectionName}>Defesa</Text>
              </View>
              <Text style={styles.value}>50</Text>
            </View>
            <View style={styles.sectionBottom}>
              <View style={styles.figureText}>
                <Image
                  style={styles.figure}
                  source={heart}
                  resizeMode="contain"
                />
                <Text style={styles.sectionName}>Vida</Text>
              </View>
              <Text style={styles.value}>100</Text>
            </View>
          </View>
          <View style={styles.footer}>
            <View style={styles.sectionFooter}>
              <Image
                style={styles.figureFooter}
                source={treasure}
                resizeMode="contain"
              />
              <Text style={styles.textFooter}>Loja</Text>
            </View>
            <View style={styles.sectionFooter}>
              <Image
                style={styles.figureFooter}
                source={quest}
                resizeMode="contain"
              />
              <Text style={styles.textFooter}>Quests</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
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
  section: {
    backgroundColor: '#2E2635',
    height: 55,
    marginBottom: 1,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    justifyContent: 'space-between',
  },
  sectionMiddle: {
    backgroundColor: '#2E2635',
    height: 55,
    marginBottom: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    justifyContent: 'space-between',
  },
  sectionBottom: {
    backgroundColor: '#2E2635',
    height: 55,
    marginBottom: 1,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    justifyContent: 'space-between',
  },
  figureText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  figure: {
    width: 28,
    height: 28,
    marginRight: 10,
  },
  sectionName: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  value: {
    color: '#3BDA5E',
    flexDirection: 'row',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  sectionFooter: {
    backgroundColor: '#2E2635',
    height: 82,
    width: '100%',
    marginBottom: 30,
    borderRadius: 14,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  figureFooter: {
    width: 100,
    height: 100,
    transform: [{translateY: -9}],
  },
  textFooter: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
