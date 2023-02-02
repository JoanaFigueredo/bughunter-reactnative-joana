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
import {FilterStoreButton} from '../components/FilterStoreButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {EquipmentsItem} from '../components/EquipmentsItem';
import {useAuthContext} from '../contexts/AuthContext';

const EquipmentsList = ({navigation}) => {
  const {user} = useAuthContext();
  const [filterSelected, setFilterSelected] = useState('all');
  const [all, setAll] = useState(user.equipment);
  const [filtered, setFiltered] = useState(user.equipment);

  useEffect(() => {
    filterList();
  }, [filterSelected]);

  const filterList = () => {
    if (filterSelected === 'all') {
      setFiltered(all);
    } else {
      const itens = all.filter(
        item => item.affected_attribute === filterSelected,
      );
      setFiltered(itens);
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
        <View style={styles.equipment}>
          <Text style={styles.labelEquipament}>Equipamentos</Text>
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
          renderItem={({item}) => <EquipmentsItem item={item} />}
          keyExtractor={(_, index) => `@equipment-${index}`}
        />
      </View>
    </SafeAreaView>
  );
};

export default EquipmentsList;

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
  equipment: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  labelEquipament: {
    fontWeight: 'bold',
    fontSize: 32,
    color: 'white',
  },
  scrollFilter: {
    maxHeight: 35,
    flexDirection: 'row',
    marginBottom: 10,
  },
});
