import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

const UserItem = ({ props, navigation }) => {
  const onPressHandler = () => {
    navigation.navigate('Detalle de usuario', {
      id: props.id,
    });
  };

  return (
    <ListItem key={props.id} bottomDivider onPress={onPressHandler}>
      <Avatar
        size="medium"
        rounded
        source={props.avatar ? { uri: props.avatar } : null}
        avatarStyle={styles.avatar}
      />
      <ListItem.Content>
        <ListItem.Title>
          {props.first_name} {props.last_name}
        </ListItem.Title>
        <ListItem.Subtitle>
          <Text style={styles.email}>{props.email}</Text>
        </ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );
};

const styles = StyleSheet.create({
  avatar: {
    borderWidth: 1,
    borderColor: 'red',
  },
  email: {
    color: '#29b6f6',
  },
});
export default UserItem;
