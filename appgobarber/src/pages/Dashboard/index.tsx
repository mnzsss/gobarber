import React from 'react';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native';
import { Container } from './styles';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <TouchableOpacity onPress={signOut}>
        <Text style={{ fontSize: 24, color: '#fff' }}>Sair</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Dashboard;
