import { StyleSheet } from 'react-native';
import styled, { css } from 'styled-components/native';

interface ContainerProps {
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  min-width: 100%;
  height: 62px;
  padding: 0 16px;
  background: #fff;
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: #4f6268;
  align-items: center;
  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
`;

export const TitleQuestion = styled.Text`
  margin-top: 8px;
  font-size: 12px;
  color: #4f6268;
`;

export const RadioButtonGroups = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const RadioButtonOption = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const RadioButtonText = styled.Text`
  font-size: 16px;
  color: #4f6268;
`;
