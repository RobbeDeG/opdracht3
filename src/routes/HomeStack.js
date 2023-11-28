import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/AllMeetups'
import ReviewDetails from '../screens/ReviewDetails'
import { globalStyles } from '../styles/global'
import Header from '../screens/shared/Header'

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
          <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
      </Stack.Navigator>
  )
}

export default HomeStack
