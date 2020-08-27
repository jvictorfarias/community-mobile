import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px 0px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #4f6268;
  margin: 10px 0 20px 0;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 50px;
  margin-top: 12px;
`;

export const FormHeader = styled.View`
  align-items: center;
  justify-content: center;
`;

interface ContainerProps {
  isErrored?: boolean;
}

export const FieldContainer = styled.View<ContainerProps>`
  min-width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #fff;
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: #4f6268;
  flex-direction: row;
  align-items: center;
  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
`;
