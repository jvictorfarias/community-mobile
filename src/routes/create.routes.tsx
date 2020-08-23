import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CreateIndividuals from '../pages/CreateIndividuals';
import CreateFamilies from '../pages/CreateFamilies';
import Create from '../pages/Create';

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
        options={{ headerShown: true }}
        name="Cadastrar Indivíduo"
        component={CreateIndividuals}
      />
      <CreateNavigator.Screen
        options={{ headerShown: true }}
        name="Cadastrar Família"
        component={CreateFamilies}
      />
    </CreateNavigator.Navigator>
  );
};

export default CreateRoutes;
