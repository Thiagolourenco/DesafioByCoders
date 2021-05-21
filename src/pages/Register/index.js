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

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const {goBack} = useNavigation();

  function handleRegister() {
    setLoading(true);
    auth()
      .createUserWithEmailAndPassword(username, password)
      .then(res => {
        setLoading(false);
        goBack();
      })
      .catch(error => {
        setLoading(false);
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      <View style={styles.content}>
        <TextInput
          placeholder="email@mail"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          placeholder="*******"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <Pressable style={styles.btn} onPress={handleRegister}>
        {loading ? (
          <ActivityIndicator size="small" color={Colors.White} />
        ) : (
          <Text style={styles.btnText}>Cadastrar</Text>
        )}
      </Pressable>

      <Pressable style={styles.btnRegister} onPress={() => goBack()}>
        <Text style={styles.btnText}>Voltar</Text>
      </Pressable>
    </View>
  );
}
