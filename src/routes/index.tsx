import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import AuthRoutes from './auth.routes';
import AcsRoutes from './acs.routes';

import { useAuth } from '../hooks/auth';

const Routes: React.FC = () => {
  const { acs, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  return acs ? <AcsRoutes /> : <AuthRoutes />;
};

export default Routes;
