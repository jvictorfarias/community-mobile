import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SelectFamilies from '../pages/SelectFamilies';
import CreateIndividuals from '../pages/CreateIndividuals';

const IndividualNavigator = createStackNavigator();

const IndividualRoutes: React.FC = () => {
  return (
    <IndividualNavigator.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#fff' },
      }}>
      <IndividualNavigator.Screen
        options={{ headerShown: true }}
        name="Selecionar Família"
        component={SelectFamilies}
      />
      <IndividualNavigator.Screen
        options={{ headerShown: true }}
        name="Criar Indivíduo"
        component={CreateIndividuals}
      />
    </IndividualNavigator.Navigator>
  );
};

export default IndividualRoutes;
