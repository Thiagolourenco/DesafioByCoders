import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import styles from './styles';
import {Logout} from '../../store/modules/user/actions';

export default function UserInfo() {
  const {user: info} = useSelector(({user}) => user);

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>E-mail: {info?.email}</Text>

      <Pressable onPress={() => dispatch(Logout())} style={styles.btnLogout}>
        <Text style={styles.btnLogoutText}>Sair</Text>
      </Pressable>
    </View>
  );
}
