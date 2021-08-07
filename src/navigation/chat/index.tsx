import React from 'react';
import {
  View,
  StatusBar,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import TopMenu from './topMenu';
import styles from './styles';
import TopSettings from './topMenu/topSettings';

const data = [
  {
    img: 'https://hadikarimi.com/wp-content/uploads/2020/06/Chopin-2.jpg',
    name: 'Frédéric Chopin',
    chat: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita asperiores iure voluptatibus id reiciendis nam, molestias odio officia eius culpa illum rerum perferendis, explicabo alias nesciunt ducimus. Nihil, temporibus voluptatum?',
    hour: '05:01',
  },
  {
    img: 'http://s2.glbimg.com/i8rkVK9Tz3l73QYR5QJ1Z1tEorMwoFAWO93Zvis4Lr5by86xufIspNYIE32UnjrC/e.glbimg.com/og/ed/f/original/2013/08/29/eduardo_ferraz.jpg',
    name: 'Pedro Albuquerque',
    chat: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita asperiores iure voluptatibus id reiciendis nam, molestias odio officia eius culpa illum rerum perferendis, explicabo alias nesciunt ducimus. Nihil, temporibus voluptatum?',
    hour: 'Ontem',
  },
  {
    img: 'https://jeonline.com.br/site/uploads/posts/10282_22022017140756.jpg',
    name: 'Camila Dajonus',
    chat: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita asperiores iure voluptatibus id reiciendis nam, molestias odio officia eius culpa illum rerum perferendis, explicabo alias nesciunt ducimus. Nihil, temporibus voluptatum?',
    hour: '02/04',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0b8205RPU3RsEb6rT8ilNCjhAFhdtn9U6hg&usqp=CAU',
    name: 'Edgar Fresno',
    chat: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita asperiores iure voluptatibus id reiciendis nam, molestias odio officia eius culpa illum rerum perferendis, explicabo alias nesciunt ducimus. Nihil, temporibus voluptatum?',
    hour: '14:20',
  },
  {
    img: 'https://projetandopessoas.com.br/wp-content/uploads/2015/01/unnamed5.jpg',
    name: 'Roberta Diamond',
    chat: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita asperiores iure voluptatibus id reiciendis nam, molestias odio officia eius culpa illum rerum perferendis, explicabo alias nesciunt ducimus. Nihil, temporibus voluptatum?',
    hour: '15:54',
  },
  {
    img: 'https://picsum.photos/1920/1080',
    name: 'Carlos Fernando',
    chat: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita asperiores iure voluptatibus id reiciendis nam, molestias odio officia eius culpa illum rerum perferendis, explicabo alias nesciunt ducimus. Nihil, temporibus voluptatum?',
    hour: '19:34',
  },
  {
    img: 'https://static1.dermaclub.com.br/articles/7/52/27/@/11757-xxx-article_media_header_mobile-2.jpg',
    name: 'Meliodas Antonio',
    chat: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita asperiores iure voluptatibus id reiciendis nam, molestias odio officia eius culpa illum rerum perferendis, explicabo alias nesciunt ducimus. Nihil, temporibus voluptatum?',
    hour: 'Ontem',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtmvuBWlh6A-_HRYTQJUWh2i0CtPtLZ_QZkw&usqp=CAU',
    name: 'Ibrahim Dajani',
    chat: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita asperiores iure voluptatibus id reiciendis nam, molestias odio officia eius culpa illum rerum perferendis, explicabo alias nesciunt ducimus. Nihil, temporibus voluptatum?',
    hour: '15:55',
  },
];

const home: React.FC = () => {
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={{
        // backgroundColor: '#343434',
        flexDirection: 'row',
        height: 100,
      }}>
      <Image
        source={{uri: item.img}}
        style={{
          width: 66,
          height: 66,
          borderRadius: 33,
          alignSelf: 'center',
        }}
      />
      <View
        style={{
          flex: 1,
          padding: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomColor: '#7D7D80',
          borderBottomWidth: 0.2,
        }}>
        <View>
          <Text style={{color: 'white', fontSize: 20}}>{item.name}</Text>
          <Text
            style={{
              color: '#7D7D80',
              fontSize: 16,
              maxWidth: 240,
              maxHeight: 40,
            }}>
            {item.chat}
          </Text>
        </View>
        <View>
          <Text style={{color: '#7D7D80', fontSize: 18}}>{item.hour}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#010101'} barStyle={'dark-content'} />
      <TopMenu />
      <TopSettings />
      <View
        style={{
          borderBottomColor: '#7D7D80',
          borderBottomWidth: 0.2,
        }}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default home;
