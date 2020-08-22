import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 24px;
  background: #4f6268;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  color: #f4ede8;
  font-size: 20px;
  line-height: 28px;
`;

export const HeaderName = styled.Text`
  color: #21c8b7;
  font-weight: bold;
`;

export const UserAvatar = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 50px;
`;
