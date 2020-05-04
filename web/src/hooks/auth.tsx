import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api';

interface AuthState {
  token: string;
  user: object;
}

interface SiginInProps {
  email: string;
  password: string;
}

interface AuthContextData {
  user: object;
  signIn({ email, password }: SiginInProps): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const user = localStorage.getItem('@GoBarber:User');
    const token = localStorage.getItem('@GoBarber:Token');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', { email, password });

    const { token, user } = response.data;

    localStorage.setItem('@GoBarber:Token', token);
    localStorage.setItem('@GoBarber:User', JSON.stringify(user));

    setData({ token, user });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
