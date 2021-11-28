import React, { Component, useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
interface Props {
  content: string
  author: string
  image: string
}

const Posts = (props: Props) => {
  const [state, setstate] = useState(false)
  return (
    <View style={styles.post}>
      <View style={styles.postContainer}>
        <Image style={styles.image} source={{ uri: props.image }} />

        <View style={styles.title}>
          <Text style={styles.content}>{props.content}</Text>
        </View>
        <View style={styles.postAbout}>
          <Text style={styles.author}>{props.author}</Text>
          <TouchableOpacity onPress={() => { setstate(!state) }} style={styles.likeBtn}>
            <FontAwesome
              name="heart"
              size={25}
              color={state ? "red" : "black"}
              style={{ marginRight: 15 }}
            />
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
    marginRight: 20,
    borderRadius: 10
  },
  postAbout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 7.5,
    paddingRight: 7.5
  },
  post: {
    backgroundColor: "#828282",
    marginBottom: 15,
    marginTop: 15,
    padding: 15,
    borderRadius: 10,

  },
  content: {
    padding: 10,
    fontSize: 17,
  },
  author: {

  },
  title: {
    color: "#3388ff",
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 30,
  },
  postContainer: {},
  likeBtn: {}

});
export default Posts