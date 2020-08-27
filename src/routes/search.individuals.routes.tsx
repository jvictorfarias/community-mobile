import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchIndividuals from '../pages/SearchIndividuals';
import ShowIndividual from '../pages/ShowIndividual';

const SearchIndividualNavigator = createStackNavigator();

const SearchIndividualRoutes: React.FC = () => {
  return (
    <SearchIndividualNavigator.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#fff' },
      }}>
      <SearchIndividualNavigator.Screen
        options={{ headerShown: true }}
        name="Buscar Indivíduos"
        component={SearchIndividuals}
      />
      <SearchIndividualNavigator.Screen
        options={{ headerShown: true }}
        name="Detalhes do Indivíduo"
        component={ShowIndividual}
      />
    </SearchIndividualNavigator.Navigator>
  );
};

export default SearchIndividualRoutes;
