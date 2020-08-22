import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Block = styled(RectButton)`
  flex: 1;
  max-height: 120px;
  margin: auto;
  width: 300px;
  border-radius: 8px;
  background: #fff;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 24px;
  color: #21c8b7;
`;
