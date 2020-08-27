import React, { useEffect, useState, useCallback } from 'react';
import { Searchbar } from 'react-native-paper';

import {
  Container,
  FamilyContainer,
  FamilyName,
  FamiliesList,
  FamiliesListTitle,
} from './styles';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';

export interface Family {
  name: string;
  id: string;
}

const SearchFamilies: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [families, setFamilies] = useState<Family[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    if (searchQuery.length > 0) {
      api.get<Family[]>(`/families/search/${searchQuery}`).then(({ data }) => {
        setFamilies(data);
      });
    }
  }, [searchQuery]);

  const onChangeSearch = useCallback((query) => {
    setSearchQuery(query);
  }, []);

  return (
    <Container>
      <Searchbar
        placeholder="Buscar Família"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />

      <FamiliesList
        data={families}
        keyExtractor={(family) => family.id}
        ListHeaderComponent={
          <FamiliesListTitle>
            {families.length > 0
              ? 'Selecione uma família'
              : 'Nenhuma família encontrada'}
          </FamiliesListTitle>
        }
        renderItem={({ item: family }) => (
          <FamilyContainer
            onPress={() =>
              navigation.navigate('Detalhes da Família', {
                family: family.id,
              })
            }>
            <FamilyName>{family.name}</FamilyName>
          </FamilyContainer>
        )}
      />
    </Container>
  );
};

export default SearchFamilies;
