import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import { Family } from './';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const FamiliesList = styled(FlatList as new () => FlatList<Family>)`
  padding: 32px 12px 16px;
`;

export const FamiliesListTitle = styled.Text`
  font-size: 24px;
  margin-bottom: 24px;
  color: #21c8b7;
`;

export const FamilyContainer = styled(RectButton)`
  background: #21c8b7;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 16px;
  flex-direction: row;
  align-items: center;
`;

export const FamilyName = styled.Text`
  font-size: 18px;
  color: #fff;
`;
