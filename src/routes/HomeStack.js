import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AllMeetups from '../screens/AllMeetups'
import { globalStyles } from '../styles/global'
import Header from '../screens/shared/Header'
import HeaderDetails from '../screens/shared/HeaderDetails'
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
              options={{ headerShown: false }} 
          />
          <Stack.Screen 
              name="MeetupDetails" 
              component={MeetupDetails}
              options={{headerShown: false}}
          />
      </Stack.Navigator>
  )
}

export default HomeStack
