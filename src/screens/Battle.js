import React, {useMemo} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import logo from '../assets/images/logo.png';
import sword from '../assets/images/icon-sword.png';
import shield from '../assets/images/icon-shield.png';
import heart from '../assets/images/icon-heart.png';
import bug from '../assets/images/bug.png';
import treasure from '../assets/images/treasure.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MainButton from '../components/MainButton';
import Toast from 'react-native-toast-message';
import {BattleValues} from '../components/BattleValues';
import {useAuthContext} from '../contexts/AuthContext';
import axios from 'axios';

const Battle = ({navigation, route}) => {
  const {user, setUser} = useAuthContext();
  const {quest} = route.params;
  const hasBugs = quest.bugs.length > 0;

  const buttonLabel = useMemo(() => {
    if (hasBugs) {
      return 'Lutar';
    }
    if (!hasBugs) {
      return 'Farmar';
    }
    return '';
  }, [hasBugs]);

  const wonBattle = async () => {
    const newValueGold = user.gold + quest.reward;
    const characterUpdated = {
      ...user,
      gold: newValueGold,
    };
    const response = await axios.patch(
      'https://dws-bug-hunters-api.vercel.app/api/characters/',
      characterUpdated,
    );
    setUser(characterUpdated);
    Toast.show({
      type: 'success',
      text2: 'Parabéns! Tu ganhou a batalha (:',
    });
    navigation.navigate('Quests');
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
        <View style={{flex: 1}}>
          <View style={styles.containerFigure}>
            <Image source={bug} resizeMode="contain" style={styles.bugFigure} />
            <View style={styles.sectionBugName}>
              <Text style={styles.labelBugName}>{quest.name}</Text>
            </View>
          </View>
          {hasBugs && (
            <View style={styles.containerImages}>
              <BattleValues image={shield} value={quest.bugs[0].def} />
              <BattleValues image={heart} value={quest.bugs[0].agi} />
              <BattleValues image={sword} value={quest.bugs[0].atk} />
            </View>
          )}
        </View>
        <View style={styles.treasure}>
          <Image source={treasure} resizeMode="contain" style={styles.img} />
          <Text style={styles.valueTreasure}>{quest.reward}</Text>
        </View>
        <MainButton
          title={buttonLabel}
          onPress={
            hasBugs
              ? () => navigation.navigate('StartBattle', {quest})
              : wonBattle
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default Battle;

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
  containerFigure: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bugFigure: {
    width: 331,
    height: 275,
  },
  sectionBugName: {
    backgroundColor: '#2E2635',
    height: 45,
    width: 330,
    marginBottom: 1,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelBugName: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  img: {
    width: 53,
    height: 54,
  },
  containerImages: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  valueTreasure: {
    color: '#F3CC30',
    fontSize: 20,
    fontWeight: 'bold',
  },
  treasure: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 90,
  },
});
