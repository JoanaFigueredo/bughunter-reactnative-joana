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
import {QuestsList} from '../components/QuestsList';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Quests = ({navigation}) => {
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
        <View style={styles.quests}>
          <Text style={styles.labelQuests}>Quests</Text>
        </View>
        <QuestsList label={'500'} name={'Zeus'} />
        <QuestsList label={'50'} name={'Kratos'} />
        <QuestsList label={'130'} name={'Thanos'} />
      </View>
    </SafeAreaView>
  );
};

export default Quests;

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
  quests: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  labelQuests: {
    fontWeight: 'bold',
    fontSize: 32,
    color: 'white',
  },
});
