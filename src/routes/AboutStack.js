import { StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../styles/global'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import About from '../screens/About'
import Header from '../screens/shared/Header'

const Stack = createStackNavigator()

const AboutStack = () => {
  return (
    <Stack.Navigator
        screenOptions={globalStyles.screenOptions}
    >
            <Stack.Screen 
                name="About" 
                component={About} 
                options={({navigation}) => ({header: () => <Header navigation={navigation} title="About"/> })} 
                />
    </Stack.Navigator>
  )
}

export default AboutStack

const styles = StyleSheet.create({})