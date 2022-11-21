import React, {useState} from 'react';
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

const CreateCharacter = () => {
  const [characterName, setCharacterName] = useState('');

  return (
    <View style={styles.a}>
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
      <View style={styles.viewCriarPerso}>
        <Text style={styles.labelViewCriarPerso}>Criar Personagem</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome do personagem"
          value={characterName}
          onChangeText={text => setCharacterName(text)}
        />
      </View>
      <View>
        <Text style={styles.labelFaccao}>Facção</Text>
      </View>
      <View style={styles.imagens}>
        <TouchableOpacity style={styles.imgCruz}>
          <Image
            source={require('../assets/images/cross.png')}
            resizeMode="contain"
            style={styles.novoAlguma}
          />
          <View style={styles.textView}>
            <Text style={styles.vochora}>Front</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.imgChapeu}>
          <Image
            source={require('../assets/images/helmet.png')}
            resizeMode="contain"
            style={styles.novoAlguma}
          />
          <View style={styles.textView}>
            <Text style={styles.vochora}>Mobile</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.imgNavio}>
          <Image
            source={require('../assets/images/boat.png')}
            resizeMode="contain"
            style={styles.novoAlguma}
          />
          <View style={styles.textView}>
            <Text style={styles.vochora}>Backend</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.btnCriar}>
        <MainButton title="Criar" />
      </View>
    </View>
  );
};

export default CreateCharacter;

const styles = StyleSheet.create({
  a: {
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
  viewCriarPerso: {
    alignItems: 'flex-start',
  },
  labelViewCriarPerso: {
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
  labelFaccao: {
    marginTop: 30,
    fontSize: 32,
    color: 'white',
  },
  imagens: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 20,
  },
  imgCruz: {
    borderWidth: 2,
    borderColor: '#38116A',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 115,
    height: 150,
  },
  imgChapeu: {
    borderWidth: 2,
    borderColor: '#132109',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 115,
    height: 150,
  },
  imgNavio: {
    borderWidth: 2,
    borderColor: '#402A07',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 115,
    height: 150,
  },
  imgNavioOnPress: {
    backgroundColor: '#402A07',
  },
  novoAlguma: {
    width: 50,
    height: 90,
  },
  vochora: {
    color: 'white',
    fontSize: 16,
  },
  textView: {
    alignSelf: 'center',
    width: '100%',
    alignItems: 'center',
  },
  btnCriar: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
    paddingBottom: Platform.OS === 'android' ? 20 : 0,
  },
});
