import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SelectFamilies from '../pages/SelectFamilies';
import CreateIndividuals from '../pages/CreateIndividuals';
import DetailIndividual from '../pages/DetailIndividual';
import DetailIndividualMore from '../pages/DetailIndividualMore';

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
      <IndividualNavigator.Screen
        options={{ headerShown: true }}
        name="Detalhes"
        component={DetailIndividual}
      />
      <IndividualNavigator.Screen
        options={{ headerShown: true }}
        name="Mais Detalhes"
        component={DetailIndividualMore}
      />
    </IndividualNavigator.Navigator>
  );
};

export default IndividualRoutes;
