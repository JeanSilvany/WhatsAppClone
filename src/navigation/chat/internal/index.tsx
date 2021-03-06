import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const Internal: React.FC = ({route, navigation}: any) => {
  const {item} = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity>
            <Image
              source={{uri: item.img}}
              style={{
                width: 40,
                height: 40,
                marginRight: 10,
                borderRadius: 999,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{color: 'white', fontSize: 20}}>{item.name}</Text>
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{flex: 1}}>
        <ImageBackground
          source={{uri: 'https://i.redd.it/guftuc4o9ik41.jpg'}}
          resizeMode="cover"
          style={{flex: 1, justifyContent: 'center'}}>
          <View style={styles.container}>
            <ScrollView>
              {item.chat.map((element, index): any => (
                <View key={`element-${index}`} style={styles.boxText}>
                  <Text style={styles.text}>{element}</Text>
                  <Text style={styles.textHour}>{item.hour}</Text>
                </View>
              ))}
            </ScrollView>
          </View>
        </ImageBackground>
        <View
          style={{
            backgroundColor: '#171717',
            height: 50,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
          }}>
          <TouchableOpacity>
            <Icon name="ios-add-sharp" size={30} color={'#29A4EB'} />
          </TouchableOpacity>
          <TextInput
            style={{
              backgroundColor: '#2C2C2E',
              width: 180,
              height: 40,
              padding: 10,
              color: '#f0f0f0',
              borderBottomLeftRadius: 20,
              borderTopLeftRadius: 20,
              fontSize: 18,
            }}
          />
          <TouchableOpacity>
            <Icon
              name="document-outline"
              size={30}
              style={{
                color: '#29A4EB',
                padding: 4,
                height: 40,
                width: 50,
                backgroundColor: '#2C2C2E',
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name="ios-camera"
              size={30}
              style={{
                color: '#29A4EB',
                padding: 4,
                height: 40,
                width: 50,
                marginLeft: 5,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name="ios-mic-outline"
              size={30}
              style={{
                color: '#29A4EB',
                padding: 4,
                height: 40,
                width: 50,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Internal;
