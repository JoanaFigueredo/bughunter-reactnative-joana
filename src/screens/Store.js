import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import logo from '../assets/images/logo.png';
import coin from '../assets/images/coin.png';
import sword from '../assets/images/icon-sword.png';
import shield from '../assets/images/icon-shield.png';
import heart from '../assets/images/icon-heart.png';
import {FilterStoreButton} from '../components/FilterStoreButton';
import {StoreChoises} from '../components/StoreChoises';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Store = ({navigation}) => {
  const [filterSelected, setFilterSelected] = useState('');
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
        <View style={styles.store}>
          <Text style={styles.labelStore}>Loja</Text>
          <View style={styles.coinCash}>
            <Image
              source={coin}
              resizeMode="contain"
              style={styles.coinLabel}
            />
            <Text style={styles.cash}>409</Text>
          </View>
        </View>
        <ScrollView horizontal style={styles.scrollFilter}>
          <FilterStoreButton
            label={'Todos'}
            color={'#2E2635'}
            isSelected={filterSelected === 'todos'}
            onPress={() => setFilterSelected('todos')}
          />
          <FilterStoreButton
            label={'Defesa'}
            color={'#2E2635'}
            isSelected={filterSelected === 'defesa'}
            onPress={() => setFilterSelected('defesa')}
          />
          <FilterStoreButton
            label={'Ataque'}
            color={'#2E2635'}
            isSelected={filterSelected === 'ataque'}
            onPress={() => setFilterSelected('ataque')}
          />
          <FilterStoreButton
            label={'Vida'}
            color={'#2E2635'}
            isSelected={filterSelected === 'vida'}
            onPress={() => setFilterSelected('vida')}
          />
        </ScrollView>
        <StoreChoises image={shield} label={'+50'} name={'Armadura de Frey'} />
        <StoreChoises image={sword} label={'+50'} name={'Armadura de Frey'} />
        <StoreChoises image={heart} label={'+30'} name={'Armadura de Frey'} />
      </View>
    </SafeAreaView>
  );
};

export default Store;

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
  store: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  labelStore: {
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
  scrollFilter: {
    maxHeight: 35,
    flexDirection: 'row',
    marginBottom: 10,
  },
});
