import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px 120px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #4f6268;
  margin: 0 0 10px;
`;

export const BackToSignIn = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: #4f6268;
  border-top-width: 1px;
  border-color: #232129;
  padding: 16px 0 16px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const BackToSignInText = styled.Text`
  color: #fff;
  font-size: 18px;
  margin-left: 16px;
`;
