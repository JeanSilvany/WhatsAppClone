import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import styles from './styles';

const TopMenu: React.FC = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.text}>Editar</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Feather name="edit" size={26} color="#29A4EB" />
      </TouchableOpacity>
    </View>
  );
};

export default TopMenu;
