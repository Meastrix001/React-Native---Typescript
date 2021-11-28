import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image, ActivityIndicator } from
  'react-native'
import Colors from '../constants/Colors'
interface Props {
  content: string
  author: string
  image: string
}

const UserCard = (props: Props) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContainer}>
        <View>
          <Image
            source={{ uri: props.image }}
            style={styles.userImage}
          />
          <TouchableOpacity style={styles.likeBtn} />
        </View>
        <Text style={styles.name} >{props.content}</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  userImage: {
    width: 50,
    height: 50,
    marginRight: 20,
    borderRadius: 10
  },
  card: {
    backgroundColor: "#828282",
    marginBottom: 15,
    marginTop: 15,
    borderRadius: 10,
    padding: 10

  },
  name: {
    fontSize: 20,
    color: Colors.light.text
  },

  title: {
    color: "#3388ff",
    fontSize: 40,
    textAlign: 'center',
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: "center",
  },
  likeBtn: {}

});
export default UserCard