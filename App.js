import React from 'react';
import { View, Text } from 'react-native';
import UserList from './containers/UserList/UserList';
const App = () => {
  return (
    <View>
      <Text>Hola soy App</Text>
      <UserList />
    </View>
  );
};

export default App;
