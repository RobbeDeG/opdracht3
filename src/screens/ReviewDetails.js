import { StyleSheet, Text, View, Button, Image} from 'react-native'
import { globalStyles, images } from '../styles/global'
import React from 'react'
import Card from './shared/Card'

const ReviewDetails = ({route}) => {


  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.ReviewTitleText}>Naam</Text>
        <Text style={globalStyles.reviewText}>{route.params.title}</Text>
        <Text style={globalStyles.ReviewTitleText}>Beschrijving</Text>
        <Text style={globalStyles.reviewText}>{route.params.body}</Text>
        <View style={styles.rating}>
          <Text style={globalStyles.ReviewTitleText}>Rating</Text>
          <Image source={images.ratings[route.params.rating]} />
        </View>
      </Card>
    </View>
  )
}

export default ReviewDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        textAlign: 'center',
    },
    rating: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 16,
      marginTop: 16,
      borderTopWidth: 1,
      borderTopColor: '#eee',
    }
})