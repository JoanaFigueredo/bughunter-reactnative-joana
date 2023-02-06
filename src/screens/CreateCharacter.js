import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Platform,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Alert,
} from 'react-native';
import MainButton from '../components/MainButton';
import logo from '../assets/images/logo.png';
import {FactionButton} from '../components/FactionButton';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useAuthContext} from '../contexts/AuthContext';

const CreateCharacter = ({navigation}) => {
  const [factions, setFactions] = useState([]);
  const [characterName, setCharacterName] = useState('');
  const [factionSelected, setFactionSelected] = useState({id: '', name: ''});
  const {create} = useAuthContext();

  useEffect(() => {
    getFactions();
  }, []);

  const getFactions = async () => {
    const response = await axios.get(
      'https://dws-bug-hunters-api.vercel.app/api/factions',
    );
    setFactions(response.data);
  };

  const createPress = () => {
    create({characterName, factionSelected});
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
        <View style={styles.viewCreateCharacter}>
          <Text style={styles.labelViewCreateCharacter}>Criar Personagem</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome do personagem"
            value={characterName}
            onChangeText={text => setCharacterName(text)}
          />
        </View>
        <Text style={styles.labelFaction}>Facção</Text>
        <FlatList
          contentContainerStyle={styles.flatListContainer}
          horizontal
          data={factions}
          renderItem={({item}) => (
            <FactionButton
              label={item.name}
              onPress={() => setFactionSelected(item)}
              isSelected={factionSelected.id === item.id}
            />
          )}
        />
        <View style={styles.btnCreate}>
          <MainButton title="Criar" onPress={createPress} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateCharacter;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#11081A',
  },
  container: {
    flex: 1,
    margin: 10,
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
  flatListContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    marginTop: 15,
  },
  btnLabel: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  viewCreateCharacter: {
    alignItems: 'flex-start',
  },
  labelViewCreateCharacter: {
    fontWeight: 'bold',
    fontSize: 50,
    color: 'white',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#D9D9D9',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  labelFaction: {
    marginTop: 30,
    fontSize: 32,
    color: 'white',
  },
  images: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 20,
  },
  btnCreate: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
    paddingBottom: Platform.OS === 'android' ? 20 : 0,
  },
});
