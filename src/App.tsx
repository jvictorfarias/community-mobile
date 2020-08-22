import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppProvider from './hooks';

import Routes from './routes';
import { useAuth } from './hooks/auth';

const App: React.FC = () => {
  const { acs } = useAuth();
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={acs ? '#fff' : '#fff'}
      />
      <AppProvider>
        <Routes />
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
