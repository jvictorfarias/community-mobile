import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import IndividualRoutes from './individual.routes';
// import DetailIndividual from '../pages/DetailIndividual';

const ShowNavigator = createStackNavigator();

const ShowRoutes: React.FC = () => {
  return (
    <ShowNavigator.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#fff' },
      }}>
      {/* <ShowNavigator.Screen
        options={{ headerShown: false }}
        name="Detalhes do Indivíduo"
        component={DetailIndividual}
      /> */}
    </ShowNavigator.Navigator>
  );
};

export default ShowRoutes;
