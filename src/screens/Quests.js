import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import logo from '../assets/images/logo.png';
import {QuestsList} from '../components/QuestsList';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';

const Quests = ({navigation}) => {
  const [quests, setQuests] = useState([]);

  useEffect(() => {
    getQuests();
  }, []);

  const getQuests = async () => {
    const response = await axios.get(
      'https://dws-bug-hunters-api.vercel.app/api/tasks',
    );
    setQuests(response.data);
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
        <View style={styles.quests}>
          <Text style={styles.labelQuests}>Quests</Text>
        </View>
        <FlatList
          data={quests}
          renderItem={({item}) => <QuestsList item={item} />}
        />
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
    fontSize: 30,
    color: 'white',
    fontFamily: 'Poppins-Regular',
  },
});
