import React from 'react';
import { View, Text } from 'react-native';
import UsersList from './containers/UsersList/UsersList';
const App = () => {
  return (
    <View>
      <Text>Hola soy App</Text>
      <UsersList />
    </View>
  );
};

export default App;
