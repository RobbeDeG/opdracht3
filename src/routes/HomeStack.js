import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/AllMeetups'
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
              name="Home" 
              component={Home} 
              options={({navigation}) => ({header: () => <Header navigation={navigation} title="Home"/> })} 
              />
          <Stack.Screen name="MeetupDetails" component={MeetupDetails} />
      </Stack.Navigator>
  )
}

export default HomeStack
