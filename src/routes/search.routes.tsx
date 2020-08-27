import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Search from '../pages/Search';
import SearchFamilyRoutes from './search.families.routes';
import SearchIndividualRoutes from './search.individuals.routes';

const SearchNavigator = createStackNavigator();

const SearchRoutes: React.FC = () => {
  return (
    <SearchNavigator.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#fff' },
      }}>
      <SearchNavigator.Screen name="Procurar" component={Search} />
      <SearchNavigator.Screen
        name="Procurar Indivíduo"
        component={SearchIndividualRoutes}
      />
      <SearchNavigator.Screen
        name="Procurar Famílias"
        component={SearchFamilyRoutes}
      />
    </SearchNavigator.Navigator>
  );
};

export default SearchRoutes;
