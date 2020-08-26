import React from 'react';
import { ScrollView } from 'react-native';
import Header from '../../components/Header';

import { Container, Block, Title } from './styles';
import { useNavigation } from '@react-navigation/native';

const Show: React.FC = () => {
  const { navigate } = useNavigation();
  return (
    <>
      <Header />
      <ScrollView
        contentContainerStyle={{
          flex: 1,
        }}>
        <Container>
          {/* <Block onPress={() => navigate('Detalhes do Indivíduo')}>
            <Title>Detalhes do Indivíduo</Title>
          </Block> */}
        </Container>
      </ScrollView>
    </>
  );
};

export default Show;
