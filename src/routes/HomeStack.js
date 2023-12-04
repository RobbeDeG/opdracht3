import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AllMeetups from '../screens/AllMeetups'
import { globalStyles } from '../styles/global'
import Header from '../screens/shared/Header'
import MeetupDetails from '../screens/MeetupDetails'

const Stack = createStackNavigator()

const HomeStack = () => {
  return (
      <Stack.Navigator
          screenOptions={globalStyles.screenOptions}
      >
          <Stack.Screen 
              name="All Meetups" 
              component={AllMeetups}
              options={{headerShown: true, header: ({navigation}) => <Header title="All Meetups" navigation={navigation} /> }}
          />
          <Stack.Screen 
              name="MeetupDetails" 
              component={MeetupDetails}
              options={{headerShown: true, header: ({navigation}) => <Header title="Meetup Details" navigation={navigation} />}}
          />
      </Stack.Navigator>
  )
}

export default HomeStack
