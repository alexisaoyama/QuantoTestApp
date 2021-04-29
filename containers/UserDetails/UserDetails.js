/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails } from '../../api/userDetailsApi';
import { View, StyleSheet } from 'react-native';
import { Avatar, Text } from 'react-native-elements';
import LoadingIndicator from '../../components/LoadingIndicator';
import { showMessage } from 'react-native-flash-message';

const UserDetails = ({ route }) => {
  const { id } = route.params;
  const userDetails = useSelector(state => state.userDetails.userDetails.data);
  const loading = useSelector(state => state.userDetails.loading);
  const errorMessage = useSelector(state => state.userDetails.errorMessage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserDetails(id));
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
        <View style={styles.container}>
          <Avatar
            size="xlarge"
            rounded
            source={userDetails.avatar ? { uri: userDetails.avatar } : null}
            avatarStyle={styles.avatar}
          />
          <Text h1>
            {userDetails.first_name} {userDetails.last_name}
          </Text>
          <Text style={styles.email}>Email:{userDetails.email}</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    borderWidth: 1,
    borderColor: 'red',
  },
  email: {
    color: '#29b6f6',
  },
});

export default UserDetails;
