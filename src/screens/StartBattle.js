import React, {useEffect, useMemo, useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  FlatList,
  Alert,
  ActivityIndicator,
  Modal,
} from 'react-native';
import Reanimated, {
  FadeIn,
  SlideInLeft,
  SlideInRight,
  FadeOut,
} from 'react-native-reanimated';
import background from '../assets/images/background-battle.png';
import bug from '../assets/images/character-bug-2.png';
import actionSwords from '../assets/animations/64201-action-sword.json';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Lottie from 'lottie-react-native';
import heart from '../assets/images/icon-heart.png';
import {CharacterBattleStart} from '../components/CharacterBattleStart';
import {useAuthContext} from '../contexts/AuthContext';
import TreasureModal from '../components/TreasureModal';
import GameOverModal from '../components/GameOverModal';

const StartBattle = ({navigation, route}) => {
  const {user, updatedCharacter, isLoading} = useAuthContext();
  const {quest} = route.params;
  const [modalVisible, setModalVisable] = useState(false);
  const [logList, setLogList] = useState([]);
  const [hpCharacter, setHpCharacter] = useState(user.hp);
  const [hpBug, setHpBug] = useState(quest.bugs[0].hp);
  const [battleStatus, setBattleStatus] = useState('not started');
  const [turn, setTurn] = useState('player');
  const animationRef = useRef(null);

  const startBattle = () => {
    setBattleStatus('starting');
  };

  const buttonLabel = useMemo(() => {
    if (battleStatus === 'in progress') {
      return 'Atacar';
    }
    if (battleStatus === 'not started') {
      return 'Lutar';
    }
    if (battleStatus === 'won') {
      return 'Receber recompensa';
    }
    if (battleStatus === 'lost') {
      return 'Entregar item';
    }
    return '';
  }, [battleStatus]);

  const handleButtonPress = () => {
    switch (battleStatus) {
      case 'in progress':
        atkCharacter();
        break;
      case 'not started':
        startBattle();
        break;
      case 'won':
        wonBattle();
        break;
      case 'lost':
        lostBattle();
        break;
    }
  };

  const lostBattle = async () => {
    try {
      var removedIndex = Math.floor(Math.random() * user.equipment.length);
      const newArrayEquipments = user.equipment.splice(removedIndex, 1);
      const updatedUser = {
        ...user,
        equipment: newArrayEquipments,
      };
      await updatedCharacter(updatedUser);
      setModalVisable(true);
    } catch (error) {
      console.error(error);
    }
  };

  const wonBattle = async () => {
    try {
      const newValueGold = user.gold + quest.reward;
      const characterUpdated = {
        ...user,
        gold: newValueGold,
      };
      await updatedCharacter(characterUpdated);
      setModalVisable(true);
    } catch (error) {
      console.log(error);
    }
  };

  const navigateToQuests = () => {
    setTimeout(() => {
      navigation.navigate('Quests');
    }, 1000);
  };

  const atkCharacter = () => {
    const defAtkDiference = quest.bugs[0].def - user.atk;
    const nextBugHp = defAtkDiference < 0 ? hpBug - user.atk : hpBug;
    if (nextBugHp <= 0) {
      setBattleStatus('won');
      setHpBug(0);
      return;
    } else {
      setHpBug(nextBugHp);
      setLogList([
        {stricker: 'Você', damage: `${user.atk} de dano`},
        ...logList,
      ]);
      setTurn('bug');
    }
  };

  const atkBug = () => {
    const defAtkDiferenceBug = user.def - quest.bugs[0].atk;
    const nextCharacterHp =
      defAtkDiferenceBug < 0 ? hpCharacter - quest.bugs[0].atk : hpCharacter;
    if (nextCharacterHp <= 0) {
      setBattleStatus('lost');
      setHpCharacter(0);
      return;
    } else {
      setHpCharacter(nextCharacterHp);
      setLogList([
        {stricker: 'Bug', damage: `${quest.bugs[0].atk} de dano`},
        ...logList,
      ]);
      setTurn('player');
    }
  };

  useEffect(() => {
    if (battleStatus === 'starting') {
      animationRef.current.play(0, 63);
      setTimeout(() => {
        setBattleStatus('in progress');
      }, 2000);
    }
  }, [battleStatus]);

  useEffect(() => {
    if (turn === 'bug') {
      setTimeout(() => {
        atkBug();
      }, 1000);
    }
  }, [turn]);

  useEffect(() => {
    const isTie =
      quest.bugs[0].def >= user.atk && user.def >= quest.bugs[0].atk;
    if (isTie) {
      Alert.alert('Ocorreu um empate');
      navigation.goBack();
    }
  }, []);
  return (
    <ImageBackground source={background} style={styles.background}>
      <Modal visible={modalVisible} transparent={true} animationType={'fade'}>
        {battleStatus === 'won' ? (
          <TreasureModal animationFinished={navigateToQuests} />
        ) : (
          <GameOverModal animationFinished={navigateToQuests} />
        )}
      </Modal>
      <View style={styles.container}>
        <SafeAreaView style={styles.main}>
          <TouchableOpacity style={styles.btn1} onPress={navigation.goBack}>
            <Icon name="arrow-left" size={20} color={'white'} />
          </TouchableOpacity>
          <View style={styles.characterBug}>
            <View style={styles.valueHpCharacter}>
              <View style={styles.containerValueHp}>
                <Image source={heart} style={styles.heart} />
                <Text style={styles.valueHp}>{hpCharacter}</Text>
              </View>
              <Reanimated.View entering={SlideInLeft.duration(1000)}>
                <CharacterBattleStart atb={user.factions[0].name} />
              </Reanimated.View>
            </View>
            <View style={styles.valueHpBug}>
              <View style={styles.containerValueHp}>
                <Image source={heart} style={styles.heart} />
                <Text style={styles.valueHp}>{hpBug}</Text>
              </View>
              <Reanimated.Image
                source={bug}
                resizeMode="contain"
                style={styles.bug}
                entering={SlideInRight.duration(1500)}
              />
            </View>
          </View>
          <View style={styles.footer}>
            {battleStatus === 'starting' ? (
              <Reanimated.View entering={FadeIn} exiting={FadeOut}>
                <Lottie
                  ref={animationRef}
                  source={actionSwords}
                  style={styles.actionSword}
                  loop={false}
                />
              </Reanimated.View>
            ) : battleStatus === 'in progress' ? (
              <View style={styles.containerBattle}>
                <FlatList
                  data={logList}
                  inverted
                  renderItem={({item}) => (
                    <View style={styles.infoBattle}>
                      <Text style={styles.text}>{item.stricker}</Text>
                      <Text style={styles.textDamage}>{item.damage}</Text>
                    </View>
                  )}
                />
              </View>
            ) : (
              <View />
            )}
            {battleStatus !== 'starting' && (
              <TouchableOpacity
                onPress={handleButtonPress}
                style={styles.btn2}
                resizeMode="contain">
                {isLoading ? (
                  <ActivityIndicator animating color="white" />
                ) : (
                  <Text
                    adjustsFontSizeToFit
                    numberOfLines={1}
                    style={styles.fight}>
                    {buttonLabel}
                  </Text>
                )}
              </TouchableOpacity>
            )}
          </View>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};

export default StartBattle;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
  },
  btn1: {
    height: 30,
    width: 30,
    borderRadius: 500,
    backgroundColor: '#228B22',
    opacity: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft: 20,
  },
  characterBug: {
    flex: 2,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  valueHpCharacter: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 220,
  },
  containerValueHp: {
    width: 80,
    height: 34,
    backgroundColor: '#FFFFFF50',
    borderRadius: 10,
    shadowColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  heart: {
    width: 25,
    height: 25,
    margin: 3,
  },
  valueHp: {
    fontSize: 19,
    fontWeight: 'bold',
    margin: 5,
    fontFamily: 'Poppins-Regular',
  },
  valueHpBug: {
    alignItems: 'center',
  },
  bug: {
    width: 150,
    height: 150,
    transform: [{translateY: 17}],
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 18,
    flex: 1,
  },
  actionSword: {
    aspectRatio: 1,
    height: 50,
    transform: [{translateX: -1}, {scale: 3}],
  },
  containerBattle: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFFFF50',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  infoBattle: {
    backgroundColor: '#F8F8FF50',
    borderRadius: 8,
    padding: 5,
    margin: 5,
  },
  text: {
    marginRight: 5,
    marginLeft: 5,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Poppins-Regular',
  },
  textDamage: {
    fontSize: 15,
    marginLeft: 5,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
  },
  btn2: {
    width: 200,
    height: 55,
    borderRadius: 10,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 15,
    borderColor: 'black',
    borderWidth: 2,
  },
  fight: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    fontFamily: 'Poppins-Regular',
  },
});
