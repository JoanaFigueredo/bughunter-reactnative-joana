import React from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Toast from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import coin from '../assets/images/coin.png';
import {useAuthContext} from '../contexts/AuthContext';
import {EffectImage} from './EffectImage';
import axios from 'axios';

export const StoreChoises = ({item}) => {
  const {user, setUser} = useAuthContext();

  const buy = async () => {
    try {
      if (item.value <= user.gold) {
        const newValueGold = user.gold - item.value;
        const characterUpdated = {
          ...user,
          gold: newValueGold,
          equipment: [...user.equipment, item],
          [item.affected_attribute]:
            user[item.affected_attribute] + item.affected_amount,
        };
        const response = await axios.patch(
          'https://dws-bug-hunters-api.vercel.app/api/characters/',
          characterUpdated,
        );
        Toast.show({
          type: 'success',
          text2: 'Compra feita com sucesso! (:',
        });
        setUser(characterUpdated);
      } else {
        Toast.show({
          type: 'error',
          text2: 'Putz, tu não tem ouro suficiente pra comprar esse item ):',
        });
      }
    } catch (error) {
      console.log(error);
      Toast.show({
        type: 'error',
        text2: 'Ooops, algo deu errado ):',
      });
    }
  };

  const buyItem = () => {
    Alert.alert('', 'Tem certeza que deseja comprar este item?', [
      {text: 'Sim', onPress: buy},
      {text: 'Não'},
    ]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.figureValue}>
        <EffectImage atb={item.affected_attribute} />
        <Text style={styles.value}>+{item.affected_amount}</Text>
        <Text style={styles.bar}>|</Text>
        <View style={styles.dois}>
          <Text style={styles.description} numberOfLines={1}>
            {item.name}
          </Text>
          <View style={styles.info}>
            <Image
              source={coin}
              resizeMode="contain"
              style={styles.coinLabel}
            />
            <Text style={styles.itemValue}>{item.value}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.btnCart} onPress={buyItem}>
        <Icon name="cart" size={20} color={'#8F00FF'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  dois: {
    height: 44,
    width: 200,
    marginLeft: 5,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#2E2635',
    height: 65,
    padding: 15,
    borderRadius: 10,
    marginBottom: 5,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  figureValue: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingRight: 15,
  },
  figure: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  value: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bar: {
    color: '#11081A',
    fontSize: 16,
    marginLeft: 10,
  },
  description: {
    color: 'white',
    fontSize: 16,
    flex: 1,
  },
  coinLabel: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
  itemValue: {
    color: '#F3CC30',
    fontSize: 16,
  },
  btnCart: {
    height: 34,
    width: 34,
    borderRadius: 10,
    backgroundColor: '#1E1725',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
