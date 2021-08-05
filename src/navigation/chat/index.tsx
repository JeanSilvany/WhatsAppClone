import React from 'react';
import {View, StatusBar} from 'react-native';
import TopMenu from './topMenu';
import styles from './styles';
import TopSettings from './topMenu/topSettings';

const home: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#010101'} barStyle={'dark-content'} />
      <TopMenu />
      <TopSettings />
    </View>
  );
};

export default home;
