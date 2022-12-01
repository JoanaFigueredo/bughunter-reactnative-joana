import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Platform,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import MainButton from '../components/MainButton';
import cross from '../assets/images/cross.png';
import hat from '../assets/images/helmet.png';
import ship from '../assets/images/boat.png';
import logo from '../assets/images/logo.png';
import {FactionButton} from '../components/FactionButton';

const CreateCharacter = ({navigation}) => {
  const [characterName, setCharacterName] = useState('');
  const [factionSelected, setFactionSelected] = useState('');

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <View style={styles.logo}>
          <TouchableOpacity style={styles.btn} onPress={navigation.goBack}>
            <Text style={styles.btnLabel}> - </Text>
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
          <Text style={styles.labelViewCreateCharacter}>Criar Personagem </Text>
          <TextInput
            style={styles.input}
            placeholder="Nome do personagem"
            value={characterName}
            onChangeText={text => setCharacterName(text)}
          />
        </View>
        <Text style={styles.labelFaction}>Facção</Text>
        <View style={styles.images}>
          <FactionButton
            image={cross}
            color={'#38116A'}
            label={'Front'}
            isSelected={factionSelected === 'front'}
            onPress={() => setFactionSelected('front')}
          />
          <FactionButton
            image={hat}
            color={'#132109'}
            label={'Mobile'}
            isSelected={factionSelected === 'mobile'}
            onPress={() => setFactionSelected('mobile')}
          />
          <FactionButton
            image={ship}
            color={'#402A07'}
            label={'Backend'}
            isSelected={factionSelected === 'backend'}
            onPress={() => setFactionSelected('backend')}
          />
        </View>
        <View style={styles.btnCreate}>
          <MainButton title="Criar" />
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
