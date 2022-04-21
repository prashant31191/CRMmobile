import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo() {
  return <Image source={require('../assets/app_icon_500.png')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 128,
    height: 128,
    marginBottom: 8,
  },
})
