import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const DeleteButton = styled(RectButton)`
  background: #c35353;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const DeleteText = styled.Text`
  color: #ffffff;
  font-size: 18px;
`;
