/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import LoadingIndicator from '../../components/LoadingIndicator';
import { showMessage } from 'react-native-flash-message';
import { getUserList } from '../../api/userListApi';
import UserItem from './UserItem';

const UserList = ({ navigation }) => {
  const userList = useSelector(state => state.userList.userList.data);
  const loading = useSelector(state => state.userList.loading);
  const errorMessage = useSelector(state => state.userList.errorMessage);

  const dispatch = useDispatch();

  useEffect(() => {
    //page, per_page
    dispatch(getUserList(1, 12));
  }, []);

  useEffect(() => {
    errorMessage &&
      showMessage({
        message: errorMessage,
        type: 'danger',
      });
  }, [errorMessage]);

  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <FlatList
          data={userList}
          renderItem={({ item }) => (
            <UserItem props={item} navigation={navigation} />
          )}
        />
      )}
    </>
  );
};

export default UserList;
