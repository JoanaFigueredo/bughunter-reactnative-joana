import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Platform,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import MainButton from '../components/MainButton';
import cross from '../assets/images/cross.png';
import hat from '../assets/images/helmet.png';
import ship from '../assets/images/boat.png';
import {FactionButton} from '../components/FactionButton';

const CreateCharacter = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnLabel}> - </Text>
        </TouchableOpacity>
        <View style={styles.imgView}>
          <Image
            source={require('../assets/images/logo.png')}
            resizeMode="contain"
            style={styles.logoLabel}
          />
        </View>
      </View>
      <View style={styles.viewCreateCharacter}>
        <Text style={styles.labelViewCreateCharacter}>Criar Personagem </Text>
        <TextInput style={styles.input} placeholder="Nome do personagem" />
      </View>
      <View>
        <Text style={styles.labelFaction}>Facção</Text>
      </View>
      <View style={styles.images}>
        <FactionButton image={cross} borderColor={'#38116A'} label={'Front'} />
        <FactionButton image={hat} borderColor={'#132109'} label={'Mobile'} />
        <FactionButton image={ship} borderColor={'#402A07'} label={'Backend'} />
      </View>
      <View style={styles.btnCreate}>
        <MainButton title="Criar" />
      </View>
    </View>
  );
};

export default CreateCharacter;

const styles = StyleSheet.create({
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
