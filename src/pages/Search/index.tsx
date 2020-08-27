import React from 'react';
import { ScrollView } from 'react-native';
import Header from '../../components/Header';

import { Container, Block, Title } from './styles';
import { useNavigation } from '@react-navigation/native';

const Search: React.FC = () => {
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
            <Title>Procurar Família</Title>
          </Block>
          <Block onPress={() => navigate('Procurar Indivíduo')}>
            <Title>Procurar Indivíduo</Title>
          </Block>
          <Block enabled={false} style={{ opacity: 0.5 }}>
            <Title>Procurar Posto</Title>
          </Block>
        </Container>
      </ScrollView>
    </>
  );
};

export default Search;
