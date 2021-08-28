import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import Chat from './src/navigation/chat';
import Internal from './src/navigation/chat/internal';

const teste = () => {
  return (
    <View>
      <Text>Teste</Text>
    </View>
  );
};

const Whatsappclone: React.FC = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const StackChat = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="StackConversas"
          component={BottomTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Internal"
          component={Internal}
          options={{
            headerStyle: {backgroundColor: '#171717'},
            headerTintColor: '#29A4EB',
            headerTitleStyle: {color: '#f5f5f5'},
            headerRight: () => (
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity>
                  <Icon
                    style={{paddingHorizontal: 15}}
                    name="ios-videocam-outline"
                    size={32}
                    color={'#29A4EB'}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icon name="ios-call-outline" size={28} color={'#29A4EB'} />
                </TouchableOpacity>
              </View>
            ),
            //   // headerTitle: () => route.params
            //   // title:{{data.name.toString()}}
          }}
        />
      </Stack.Navigator>
    );
  };

  const BottomTab = () => {
    return (
      <Tab.Navigator
        initialRouteName="Conversas"
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#171717',
            borderTopColor: 'transparent',
            height: 60,
            paddingTop: 5,
            paddingBottom: 5,
          },
        }}>
        <Tab.Screen
          name="Status"
          component={teste}
          options={{
            headerShown: false,
            tabBarLabel: 'Status',
            tabBarIcon: ({color, size}) => (
              <Icon name="ios-sync" size={30} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Ligações"
          component={teste}
          options={{
            headerShown: false,
            tabBarLabel: 'Ligações',
            tabBarIcon: ({color, size}) => (
              <Icon name="ios-call-outline" size={30} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Câmera"
          component={teste}
          options={{
            headerShown: false,
            tabBarLabel: 'Câmera',
            tabBarIcon: ({color, size}) => (
              <Icon name="ios-camera-outline" size={30} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Conversas"
          component={Chat}
          options={{
            headerShown: false,
            tabBarLabel: 'Conversas',
            tabBarIcon: ({color, size}) => (
              <Icon name="ios-chatbubbles" size={30} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Configurações"
          component={teste}
          options={{
            headerShown: false,
            tabBarLabel: 'Configurações',
            tabBarIcon: ({color, size}) => (
              <Icon name="ios-cog-outline" size={30} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <StackChat />
      {/* <BottomTab /> */}
    </NavigationContainer>
  );
};

export default Whatsappclone;
