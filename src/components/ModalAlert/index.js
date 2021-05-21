import React from 'react';
import {Modal, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './styles';

Icon.loadFont();

export default function ModalAlert({visible, error, onRequestClose}) {
  function messageError(err) {
    switch (err) {
      case 'auth/too-many-requests':
        return 'Acesso a sua conta foi temporáricamente bloqueada. Fale com o Admin';
      case 'auth/email-already-in-use':
        return 'Esse endereço de email já existe';
      case 'auth/invalid-email':
        return 'Email informado não é válido';
      case 'auth/user-not-found':
        return 'Email ou Senha informada está errada';
      case 'auth/wrong-password':
        return 'Senha inválida';
    }
  }
  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={true}
      onRequestClose={onRequestClose}>
      <View style={styles.container}>
        <Icon name="close" color="#f00" size={30} onPress={onRequestClose} />
        <Text style={styles.title}>Ocorreu um Error</Text>
        <Text style={styles.message}>{messageError(error?.code)}</Text>
      </View>
    </Modal>
  );
}
