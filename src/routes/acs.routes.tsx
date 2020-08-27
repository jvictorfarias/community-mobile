import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeatherIcon from 'react-native-vector-icons/Feather';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import CreateRoutes from './create.routes';
import SearchRoutes from './search.routes';

const Acs = createBottomTabNavigator();

const AcsRoutes: React.FC = () => (
  <Acs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'Estatísticas') {
          iconName = 'align-justify';
        } else if (route.name === 'Adicionar') {
          iconName = 'plus-circle';
        } else if (route.name === 'Buscar') {
          iconName = 'search';
        } else {
          iconName = 'user';
        }
        return <FeatherIcon name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#21c8b7',
      inactiveTintColor: '#4f6268',
    }}>
    {/*<Acs.Screen name="Estatísticas" component={Dashboard} /> */}
    <Acs.Screen name="Buscar" component={SearchRoutes} />
    <Acs.Screen name="Adicionar" component={CreateRoutes} />
    <Acs.Screen name="Perfil" component={Profile} />
  </Acs.Navigator>
);

export default AcsRoutes;
