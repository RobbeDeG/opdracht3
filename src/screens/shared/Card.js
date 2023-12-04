import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = ( props ) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        {props.children}
      </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    card: {
      borderRadius: 6,
      elevation: 3,
      backgroundColor: "#fff",
      shadowOffset: { width: 10, height: 10 },
      shadowColor: "#333",
      shadowOpacity: 0.8,
      shadowRadius: 2,
      marginHorizontal: 4,
      marginVertical: 6,
      flex: 1,
    },
    cardContent: {
      marginHorizontal: 18,
      marginVertical: 10,
    }
})