import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px 100px;
`;

export const Title = styled.Text`
  font-size: 24px;
  line-height: 30px;
  color: #4f6268;
  margin: 64px 0 24px;
`;

export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: #4f6268;
  border-top-width: 1px;
  border-color: #232129;
  padding: 16px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CreateAccountButtonText = styled.Text`
  color: #21c8b7;
  font-size: 18px;
  margin-left: 16px;
`;
