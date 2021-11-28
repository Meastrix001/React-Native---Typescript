import React, { useState } from 'react';
import { StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { Posts } from '../components'
import Colors from '../constants/Colors';
import { FontAwesome } from '@expo/vector-icons';

export default function Home({ navigation }: RootTabScreenProps<'Home'>) {
  const data = [
    {
      image: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
      title: "what a view",
      author: "Nick Roofthooft"
    }, {
      image: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
      title: "what a view",
      author: "Nick Roofthooft"
    }, {
      image: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
      title: "what a view",
      author: "Nick Roofthooft"
    }, {
      image: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
      title: "what a view",
      author: "Nick Roofthooft"
    }
  ]
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>

        <Text style={styles.title}>Post</Text>
        <TextInput style={styles.input}>
          <Text style={styles.inputText}>Create new post</Text>
        </TextInput>
        <FontAwesome
          name="plus"
          size={25}
          color={Colors.dark.background}
          style={{ marginRight: 15 }}
        />
      </View>

      <FlatList data={data} renderItem={({ item }) => (
        <Posts image={item.image} content={item.title} author={item.author} />
      )} />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: Colors.dark.postBackground

  },
  input: {
    backgroundColor: Colors.dark.background,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 50,
    paddingRight: 50,
    borderRadius: 25,
  },
  inputText: {
    color: "#fff",
  },
  title: {
    color: Colors.dark.text,
    fontSize: 30,
    textAlign: 'left',
  },
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
    paddingTop: 20,
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
