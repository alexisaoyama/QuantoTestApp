/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersList } from '../../api/usersListApi';

const UsersList = () => {
  const dispatch = useDispatch();
  const { usersList } = useSelector(state => state);
  console.log(usersList);

  useEffect(() => {
    dispatch(getUsersList());
  }, []);
  return (
    <View>
      <Text>Hola soy Users List</Text>
    </View>
  );
};

export default UsersList;
