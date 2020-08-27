import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CreateIndividuals from '../pages/CreateIndividuals';
import CreateFamilies from '../pages/CreateFamilies';
import Create from '../pages/Create';
import IndividualRoutes from './individual.routes';
import DetailIndividual from '../pages/DetailIndividual';
import DetailIndividualMore from '../pages/DetailIndividualMore';

const CreateNavigator = createStackNavigator();

const CreateRoutes: React.FC = () => {
  return (
    <CreateNavigator.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#fff' },
      }}>
      <CreateNavigator.Screen name="Create" component={Create} />
      <CreateNavigator.Screen
        name="Cadastrar Indivíduo"
        component={IndividualRoutes}
      />
      <CreateNavigator.Screen
        options={{ headerShown: true }}
        name="Cadastrar Família"
        component={CreateFamilies}
      />
      <CreateNavigator.Screen
        options={{ headerShown: true }}
        name="Detalhes do Indivíduo"
        component={DetailIndividual}
      />
      <CreateNavigator.Screen
        options={{ headerShown: true }}
        name="Mais Detalhes"
        component={DetailIndividualMore}
      />
    </CreateNavigator.Navigator>
  );
};

export default CreateRoutes;
