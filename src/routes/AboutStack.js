import { StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../styles/global'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import About from '../screens/About'

const Stack = createStackNavigator()

const AboutStack = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            ...globalStyles.screenOptions,
            headerShown: false
        }}
    >
        <Stack.Screen 
            name="Aboutscreen" 
            component={About} 
        />
    </Stack.Navigator>
  )
}

export default AboutStack

const styles = StyleSheet.create({})