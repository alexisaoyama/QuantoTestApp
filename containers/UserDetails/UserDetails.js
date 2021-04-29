import React from 'react';
import { View, Text } from 'react-native';

const UserDetails = ({ route }) => {
  const { id } = route.params;
  return (
    <View>
      <Text>Hola soy User Details {id}</Text>
    </View>
  );
};

export default UserDetails;
