import React from 'react';
import {Modal, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './styles';

Icon.loadFont();

export default function ModalAlert({visible, error}) {
  console.log('error', error);
  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <View style={styles.container}>
        <Icon name="close" color="#f00" size={30} />
        <Text style={styles.title}>Ocorreu um Error</Text>
        <Text style={styles.message}>Mensagem de Error</Text>
      </View>
    </Modal>
  );
}
