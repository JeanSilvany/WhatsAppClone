import React from 'react';
import {View, Text} from 'react-native';

const Internal: React.FC = ({route}) => {
  const {data} = route.params;
  console.log({data});
  return (
    <View>
      <Text>{data.name}</Text>
    </View>
  );
};

export default Internal;
