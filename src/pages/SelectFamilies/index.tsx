import React, { useEffect, useState } from 'react';

import {
  Container,
  FamiliesList,
  FamiliesListTitle,
  FamilyContainer,
  FamilyName,
} from './styles';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';

export interface Family {
  id: string;
  name: string;
  acs_id: string;
  created_at: string;
}

const SelectFamilies: React.FC = () => {
  const { navigate } = useNavigation();
  const [families, setFamilies] = useState<Family[]>([]);
  useEffect(() => {
    api.get<Family[]>('/families').then(({ data }) => {
      setFamilies(data);
    });
  }, []);
  return (
    <Container>
      <FamiliesList
        data={families}
        keyExtractor={(family) => family.id}
        ListHeaderComponent={
          <FamiliesListTitle>Selecione uma família</FamiliesListTitle>
        }
        renderItem={({ item: family }) => (
          <FamilyContainer
            onPress={() => navigate('Criar Indivíduo', { family: family.id })}>
            <FamilyName>{family.name}</FamilyName>
          </FamilyContainer>
        )}
      />
    </Container>
  );
};

export default SelectFamilies;
