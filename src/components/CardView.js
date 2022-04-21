import React from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'react-native'
import COLORS from '../consts/colors';

export default function CardView(props) {
  return <View style={styles.cardShadow} {...props} />
}

const styles = StyleSheet.create({
    
    cardShadow: {      
      backgroundColor: COLORS.light,
      alignItems: 'center',
      alignSelf: 'stretch',
      marginHorizontal: 4,
      borderRadius: 10,
      marginBottom: 12,
      padding: 8,
  
      shadowColor: COLORS.light,
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.8,
      shadowRadius: 5,
      elevation: 3,
    },
  });