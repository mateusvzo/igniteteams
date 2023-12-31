import  AsyncStorage  from '@react-native-async-storage/async-storage';
import { AppError } from '@utils/AppError';

import { PLAYER_COLLECTION } from '@storage/storegeConfig';

import { PlayerStorageDTO } from './PlayerStorageDTO';

export async function playerAddByGroup(newPlayer: PlayerStorageDTO, group: string){
  try {
    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, '')

  } catch (error) {
    console.log(error)
  }
}