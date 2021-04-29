/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getUserList } from '../../api/userListApi';

const UserList = () => {
  const userList = useSelector(state => state.userList.userList.data);
  const loading = useSelector(state => state.userList.loading);
  const errorMessage = useSelector(state => state.userList.errorMessage);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserList(1, 6));
  }, []);

  const onPressHandler = () => {
    dispatch(getUserList(2, 6));
  };

  return (
    <View>
      <Text>Hola soy User List</Text>
      <Button onPress={onPressHandler} title="Actualizar lista" />
      <Text>{JSON.stringify(userList, null, '...')}</Text>
    </View>
  );
};

export default UserList;
