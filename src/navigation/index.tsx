import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React from 'react';
import {View, Text} from 'react-native';

import Chat from './chat';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const teste = () => {
  return (
    <View>
      <Text>Teste</Text>
    </View>
  );
};

const navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Chat"
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
              <Icon name="ios-call-sharp" size={30} color={color} />
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
              <Icon name="ios-camera" size={30} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            headerShown: false,
            tabBarLabel: 'Chat',
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
              <Icon name="settings" size={30} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default navigation;
