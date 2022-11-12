import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useMemo,
} from 'react';
import { Alert } from 'react-native';

interface User {
  name: string;
  favourites?: {
    id: string;
  }[];
}

interface AuthContextData {
  userData: User;
  signIn: (values: string) => Promise<void>;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [userData, setUserData] = useState<User>({} as User);

  const userKey = '@googleBooks:data';

  async function signIn(value: string) {
    const dataValue = { name: value };
    try {
      setUserData(dataValue);
      await AsyncStorage.setItem(userKey, JSON.stringify(dataValue));
    } catch (error) {
      Alert.alert('Não foi possível salvar seu nome');
    }
  }

  useEffect(() => {
    (async () => {
      try {
        const data = await AsyncStorage.getItem(userKey);
        if (data) {
          const userLogged = JSON.parse(data) as User;
          setUserData(userLogged);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [userData]);

  return (
    <AuthContext.Provider value={{ signIn, userData }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
