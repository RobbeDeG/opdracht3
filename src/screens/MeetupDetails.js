import { StyleSheet, Text, View, Button, Image} from 'react-native'
import { globalStyles, images } from '../styles/global'
import React from 'react'
import Card from './shared/Card'

const MeetupDetails = ({route}) => {
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.detailTitleText}>Title</Text>
        <Text style={globalStyles.detailText}>{route.params.title}</Text>
        <Text style={globalStyles.detailTitleText}>Address</Text>
        <Text style={globalStyles.detailText}>{route.params.address}</Text>
        <Text style={globalStyles.detailTitleText}>Description</Text>
        <Text style={globalStyles.detailText}>{route.params.description} </Text>
      </Card>
    </View>
  )
}

export default MeetupDetails

const styles = StyleSheet.create({})