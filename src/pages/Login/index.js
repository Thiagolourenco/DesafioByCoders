import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import auth from '@react-native-firebase/auth';

import styles from './styles';
import {Colors} from '../../constants';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const {navigate} = useNavigation();

  function handleSubmit() {
    setLoading(true);
    auth()
      .signInWithEmailAndPassword(username, password)
      .then(res => {
        console.log('RES ', res);
        setLoading(false);
        navigate('Home');
      })
      .catch(error => {
        console.log('error', error);
      });
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
