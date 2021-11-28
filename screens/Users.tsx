import * as React from 'react';
import { StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { UserCard } from '../components';
import Colors from '../constants/Colors';

export default function Users({ navigation }: RootTabScreenProps<'Users'>) {
  const data = [{
    "name": "Nick Roofthooft",
    "email": "somewhere@gmail.com",
    "image": "https://static.remove.bg/remove-bg-web/a76316286d09b12be1ebda3b400e3f44716c24d0/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg"
  },
  {
    "name": "Another user",
    "email": "something@gmail.com",
    "image": "https://img-19.ccm2.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg"
  },
  {
    "name": "Another user",
    "email": "something@gmail.com",
    "image": "https://img-19.ccm2.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg"
  },
  {
    "name": "Another user",
    "email": "something@gmail.com",
    "image": "https://img-19.ccm2.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg"
  },
  {
    "name": "Another user",
    "email": "something@gmail.com",
    "image": "https://img-19.ccm2.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg"
  },
  {
    "name": "Another user",
    "email": "something@gmail.com",
    "image": "https://img-19.ccm2.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg"
  },
  {
    "name": "Another user",
    "email": "something@gmail.com",
    "image": "https://img-19.ccm2.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg"
  },
  {
    "name": "Another user",
    "email": "something@gmail.com",
    "image": "https://img-19.ccm2.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg"
  }
  ]
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Users Page</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <FlatList data={data} renderItem={({ item }) => (
        <TouchableOpacity>
          <UserCard image={item.image} content={item.name} author={item.image} />
        </TouchableOpacity>
      )} />

    </View>
  );
}

const styles = StyleSheet.create({
  userImage: {
    width: 50,
    height: 50,
    marginRight: 20,
    borderRadius: 10
  },
  title: {
    color: "#3388ff",
    fontSize: 30,
    textAlign: 'left',
    marginBottom: 30,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    marginLeft: 40,
    marginBottom: 10,
    marginTop: 10
  },
});
