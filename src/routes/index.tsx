import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AppRouters } from './app.routes';
import { useTheme } from 'styled-components/native';

export function Routes(){
  const { COLORS } = useTheme();
  return (
    <View style={{flex: 1, backgroundColor: COLORS.GRAY_600}}>
    <NavigationContainer>
      <AppRouters />
    </NavigationContainer>
    </View>
  );
}