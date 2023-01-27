import React, {createContext, useContext, useState} from 'react';
import {Alert} from 'react-native';
import axios from 'axios';

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const logOut = () => {
    setUser(null);
  };

  const getCharacters = async () => {
    const response = await axios.get(
      'https://dws-bug-hunters-api.vercel.app/api/characters',
    );
    return response.data;
  };

  const chooseCharacter = async characterName => {
    setIsLoading(true);
    if (characterName !== '') {
      const getcatchCharacters = await getCharacters();
      const findCharacter = getcatchCharacters.find(
        elem => elem.name === characterName,
      );
      if (!findCharacter) {
        Alert.alert('Esse personagem não existe. \nTente um nome diferente.');
      } else {
        setUser(findCharacter);
      }
    } else {
      Alert.alert('Você precisa digitar um nome pra conseguir logar.');
    }
    setIsLoading(false);
  };

  const postCharacter = async ({characterName, factionSelected}) => {
    try {
      const response = await axios.post(
        'https://dws-bug-hunters-api.vercel.app/api/characters',
        {
          atk: 5,
          def: 5,
          agi: 5,
          hp: 5,
          gold: 100,
          name: characterName,
          factions: [factionSelected],
          equipment: [],
        },
      );
      const allCharacters = await getCharacters();
      const createdCharacter = allCharacters.find(
        item => item.name === characterName,
      );
      setUser(createdCharacter);
    } catch (error) {
      console.log('Erro', error);
    }
  };

  const create = async ({factionSelected, characterName}) => {
    if (
      characterName !== '' &&
      factionSelected !== '' &&
      characterName.length >= 3
    ) {
      console.log(factionSelected, characterName);
      const getcatchCharacters = await getCharacters();
      const findCharacter = getcatchCharacters.find(
        elem => elem.name === characterName,
      );
      if (findCharacter) {
        Alert.alert('Esse nome ja existe, tente outro (:');
      } else {
        await postCharacter({factionSelected, characterName});
      }
    } else {
      Alert.alert(
        'Você precisa digitar um nome e selecionar uma facção pra conseguir logar.',
      );
    }
  };
  return (
    <AuthContext.Provider
      value={{
        chooseCharacter,
        user,
        logOut,
        isLoading,
        create,
        getCharacters,
        setUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
