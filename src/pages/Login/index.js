import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import analytics from '@react-native-firebase/analytics';

import styles from './styles';
import {Colors} from '../../constants';
import {LoginRequest} from '../../store/modules/user/actions';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {loading} = useSelector(({user}) => user);

  const {navigate} = useNavigation();
  const dispatch = useDispatch();

  async function handleSubmit() {
    dispatch(LoginRequest(username, password, navigate));

    await analytics().logEvent('login', {
      data: {
        email: username,
        password: password,
      },
    });

    if (!loading) {
      navigate('Home');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <View style={styles.content}>
        <TextInput
          placeholder="Usuário"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="*******"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <Pressable style={styles.btn} onPress={handleSubmit}>
        {loading ? (
          <ActivityIndicator size="small" color={Colors.White} />
        ) : (
          <Text style={styles.btnText}>Logar</Text>
        )}
      </Pressable>

      <Pressable
        style={styles.btnRegister}
        onPress={() => navigate('Register')}>
        <Text style={styles.btnText}>Cadastrar</Text>
      </Pressable>
    </View>
  );
}
