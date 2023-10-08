import { SafeAreaView } from 'react-native-safe-area-context';
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;

  padding: 16px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};

  padding: 0 24px 24px;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: #fff;
`;