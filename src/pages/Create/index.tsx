import React from 'react';
import { ScrollView } from 'react-native';
import Header from '../../components/Header';

import { Container, Block, Title } from './styles';
import { useNavigation } from '@react-navigation/native';

const Create: React.FC = () => {
  const { navigate } = useNavigation();
  return (
    <>
      <Header />

      <ScrollView
        contentContainerStyle={{
          flex: 1,
        }}>
        <Container>
          <Block onPress={() => navigate('Cadastrar Família')}>
            <Title>Cadastrar Família</Title>
          </Block>
          <Block onPress={() => navigate('Cadastrar Indivíduo')}>
            <Title>Cadastrar Indivíduo</Title>
          </Block>
          <Block enabled={false} style={{ opacity: 0.5 }}>
            <Title>Cadastrar Posto</Title>
          </Block>
        </Container>
      </ScrollView>
    </>
  );
};

export default Create;
