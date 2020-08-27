import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchFamilies from '../pages/SearchFamilies';
import ShowFamily from '../pages/ShowFamily';
import ShowIndividual from '../pages/ShowIndividual';

const SearchFamiliesNavigator = createStackNavigator();

const SearchFamilyRoutes: React.FC = () => {
  return (
    <SearchFamiliesNavigator.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#fff' },
      }}>
      <SearchFamiliesNavigator.Screen
        options={{ headerShown: true }}
        name="Buscar Famílias"
        component={SearchFamilies}
      />
      <SearchFamiliesNavigator.Screen
        options={{ headerShown: true }}
        name="Detalhes da Família"
        component={ShowFamily}
      />
      <SearchFamiliesNavigator.Screen
        options={{ headerShown: true }}
        name="Mostrar Indivíduo da Família"
        component={ShowIndividual}
      />
    </SearchFamiliesNavigator.Navigator>
  );
};

export default SearchFamilyRoutes;
