import React from 'react';
import { ListItem, Avatar } from 'react-native-elements';

const UserItem = ({ props, navigation }) => {
  const avatarStyle = {
    borderWidth: 1,
    borderColor: 'red',
  };

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
        source={{ uri: props.avatar }}
        avatarStyle={avatarStyle}
      />
      <ListItem.Content>
        <ListItem.Title>
          {props.first_name} {props.last_name}
        </ListItem.Title>
        <ListItem.Subtitle>{props.email}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );
};

export default UserItem;
