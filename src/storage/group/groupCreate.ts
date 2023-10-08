import AsyncStorage from '@react-native-async-storage/async-storage';
import { GROUP_COLLECTION } from '@storage/storegeConfig';
import { groupsGetAll } from './groupsGetAll';

export async function groupCreate(newGroup: string) {
  try{
    const storagedGroups = await groupsGetAll();

    const storage = JSON.stringify([...storagedGroups, newGroup])

    await AsyncStorage.setItem(GROUP_COLLECTION, storage)

  }catch(error){
    throw error;
  }
}