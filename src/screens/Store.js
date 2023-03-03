import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native';
import logo from '../assets/images/logo.png';
import coin from '../assets/images/coin.png';
import {FilterStoreButton} from '../components/FilterStoreButton';
import {StoreChoises} from '../components/StoreChoises';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import {useAuthContext} from '../contexts/AuthContext';

const Store = ({navigation}) => {
  const [filterSelected, setFilterSelected] = useState('all');
  const [all, setAll] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const {user} = useAuthContext();

  useEffect(() => {
    getItensStore();
  }, []);

  useEffect(() => {
    itensFilter();
  }, [filterSelected]);

  const getItensStore = async () => {
    const response = await axios.get(
      'https://dws-bug-hunters-api.vercel.app/api/equipment',
    );
    setAll(response.data);
    setFiltered(response.data);
  };

  const itensFilter = () => {
    if (filterSelected === 'all') {
      setFiltered(all);
    } else {
      const filteredItens = all.filter(
        item => item.affected_attribute === filterSelected,
      );
      setFiltered(filteredItens);
    }
  };

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
            <Text style={styles.cash}>{user.gold}</Text>
          </View>
        </View>
        <ScrollView horizontal style={styles.scrollFilter}>
          <FilterStoreButton
            label={'Todos'}
            color={'#2E2635'}
            isSelected={filterSelected === 'all'}
            onPress={() => setFilterSelected('all')}
          />
          <FilterStoreButton
            label={'Defesa'}
            color={'#2E2635'}
            isSelected={filterSelected === 'def'}
            onPress={() => setFilterSelected('def')}
          />
          <FilterStoreButton
            label={'Ataque'}
            color={'#2E2635'}
            isSelected={filterSelected === 'atk'}
            onPress={() => setFilterSelected('atk')}
          />
          <FilterStoreButton
            label={'Agilidade'}
            color={'#2E2635'}
            isSelected={filterSelected === 'agi'}
            onPress={() => setFilterSelected('agi')}
          />
        </ScrollView>
        <FlatList
          data={filtered}
          renderItem={({item}) => <StoreChoises item={item} />}
        />
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
  store: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  labelStore: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    fontFamily: 'Poppins-Regular',
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
  scrollFilter: {
    maxHeight: 35,
    flexDirection: 'row',
    marginBottom: 10,
  },
});
