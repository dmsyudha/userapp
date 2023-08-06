// src/utils/OfflineMutations.js

import AsyncStorage from '@react-native-async-storage/async-storage';

const MUTATIONS_KEY = 'OFFLINE_MUTATIONS';

export const storeMutation = async (mutation) => {
  let storedMutations = await AsyncStorage.getItem(MUTATIONS_KEY);
  storedMutations = storedMutations ? JSON.parse(storedMutations) : [];
  storedMutations.push(mutation);
  await AsyncStorage.setItem(MUTATIONS_KEY, JSON.stringify(storedMutations));
};

export const fetchStoredMutations = async () => {
  const storedMutations = await AsyncStorage.getItem(MUTATIONS_KEY);
  return storedMutations ? JSON.parse(storedMutations) : [];
};

export const removeStoredMutation = async (index) => {
  let storedMutations = await AsyncStorage.getItem(MUTATIONS_KEY);
  storedMutations = storedMutations ? JSON.parse(storedMutations) : [];
  storedMutations.splice(index, 1);
  await AsyncStorage.setItem(MUTATIONS_KEY, JSON.stringify(storedMutations));
};
