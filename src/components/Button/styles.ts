import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 60px;
  min-width: 100%;
  padding: 0 16px;
  background: #21c8b7;
  border-radius: 10px;
  margin-top: 8px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  margin: auto;
  color: #312e38;
  font-size: 18px;
`;
