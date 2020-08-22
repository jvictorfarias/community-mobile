import React from 'react';
import { ScrollView } from 'react-native';
import Header from '../../components/Header';

import { Container, Block, Title } from './styles';

const Create: React.FC = () => {
  return (
    <>
      <Header />

      <ScrollView
        contentContainerStyle={{
          flex: 1,
        }}>
        <Container>
          <Block>
            <Title>Cadastrar Família</Title>
          </Block>
          <Block>
            <Title>Cadastrar Indivíduo</Title>
          </Block>
          <Block>
            <Title>Cadastrar Posto</Title>
          </Block>
        </Container>
      </ScrollView>
    </>
  );
};

export default Create;
