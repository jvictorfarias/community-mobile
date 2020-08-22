import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../services/api';

interface Acs {
  id: string;
  name: string;
  email: string;
  cns: string;
  cbo: string;
  avatar: string;
}
interface AuthState {
  token: string;
  acs: Acs;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  acs: Acs;
  loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  updateAcs(acs: Acs): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [token, acs] = await AsyncStorage.multiGet([
        '@Community:token',
        '@Community:acs',
      ]);

      if (token[1] && acs[1]) {
        api.defaults.headers.Authorization = `Bearer ${token[1]}`;

        setData({ token: token[1], acs: JSON.parse(acs[1]) });
      }

      setLoading(false);
    }

    loadStorageData();
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/sessions', {
      email,
      password,
    });

    const { token, acs } = response.data;

    await AsyncStorage.multiSet([
      ['@Community:token', token],
      ['@Community:acs', JSON.stringify(acs)],
    ]);

    api.defaults.headers.Authorization = `Bearer ${token}`;

    setData({ token, acs });
  }, []);

  const signOut = useCallback(async () => {
    await Promise.all([
      AsyncStorage.removeItem('@Community:token'),
      AsyncStorage.removeItem('@Community:acs'),
    ]);
    setData({} as AuthState);
  }, []);

  const updateAcs = useCallback(
    async (acs: Acs) => {
      setData({
        token: data.token,
        acs,
      });

      await Promise.all([
        AsyncStorage.removeItem('@Community:acs'),
        AsyncStorage.setItem('@Community:acs', JSON.stringify(acs)),
      ]);
    },

    [data.token],
  );

  return (
    <AuthContext.Provider
      value={{ acs: data.acs, signIn, signOut, updateAcs, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
