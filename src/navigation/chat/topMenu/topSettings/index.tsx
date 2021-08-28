import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import styles from './styles';

const TopSettings: React.FC = () => {
  const [search, setSearch] = useState('');
  console.log(search);
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Conversas</Text>
      <View style={styles.inputContainer}>
        <Feather name="search" size={24} color="#88878A" style={styles.icon} />
        <TextInput
          style={styles.input}
          onChangeText={element => setSearch(element)}
        />
      </View>
      <View style={styles.listContainer}>
        <TouchableOpacity>
          <Text style={styles.listText}>Listas de transmissão</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.listText}>Novo grupo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopSettings;
