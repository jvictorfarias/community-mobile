import React, { useEffect, useState, useCallback } from 'react';
import { Searchbar } from 'react-native-paper';

import {
  Container,
  IndividualContainer,
  IndividualName,
  IndividualsList,
  IndividualsListTitle,
} from './styles';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';

export interface Individual {
  name: string;
  id: string;
}

const SearchIndividuals: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [individuals, setIndividuals] = useState<Individual[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    if (searchQuery.length > 0) {
      api
        .get<Individual[]>(`/individuals/search/${searchQuery}`)
        .then(({ data }) => {
          setIndividuals(data);
        });
    }
  }, [searchQuery]);

  const onChangeSearch = useCallback((query) => {
    setSearchQuery(query);
  }, []);

  return (
    <Container>
      <Searchbar
        placeholder="Buscar Indivíduo"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />

      <IndividualsList
        data={individuals}
        keyExtractor={(individual) => individual.id}
        ListHeaderComponent={
          <IndividualsListTitle>
            {individuals.length > 0
              ? 'Selecione um Indivíduo'
              : 'Nenhum indivíduo encontrado'}
          </IndividualsListTitle>
        }
        renderItem={({ item: individual }) => (
          <IndividualContainer
            onPress={() =>
              navigation.navigate('Detalhes do Indivíduo', {
                individual: individual.id,
              })
            }>
            <IndividualName>{individual.name}</IndividualName>
          </IndividualContainer>
        )}
      />
    </Container>
  );
};

export default SearchIndividuals;
