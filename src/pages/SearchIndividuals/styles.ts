import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Individual } from './';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 20px;
`;
export const IndividualsList = styled(
  FlatList as new () => FlatList<Individual>,
)`
  padding: 32px 12px 16px;
`;

export const IndividualsListTitle = styled.Text`
  font-size: 24px;
  margin-bottom: 24px;
  color: #21c8b7;
`;

export const IndividualContainer = styled(RectButton)`
  background: #21c8b7;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 16px;
  flex-direction: row;
  align-items: center;
`;

export const IndividualName = styled.Text`
  font-size: 18px;
  color: #fff;
`;
