import React, {useState} from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';

import styles from './styles';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    console.log('USERNAME', username, password);
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
        <Text style={styles.btnText}>Logar</Text>
      </Pressable>
    </View>
  );
}
