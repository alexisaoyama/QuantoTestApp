import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserList from './containers/UserList/UserList';
import UserDetails from './containers/UserDetails/UserDetails';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Listado de usuarios">
        <Stack.Screen
          name="Listado de usuarios"
          component={UserList}
          options={headerOptions}
        />
        <Stack.Screen
          name="Detalle de usuario"
          component={UserDetails}
          options={headerOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const headerOptions = {
  headerStyle: {
    backgroundColor: '#2196f3',
  },
  headerTintColor: '#fff',
};

export default App;
