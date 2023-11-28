import { StyleSheet, Text, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import HomeStack from './HomeStack'
import AboutStack from './AboutStack'

const DrawerNavigator = createDrawerNavigator()

const DrawerNav = () => {
  return (
    <NavigationContainer>
        <DrawerNavigator.Navigator
            screenOptions={{headerShown: false}}
        >
          <DrawerNavigator.Screen name="HomeStack" component={HomeStack} />
          <DrawerNavigator.Screen name="AboutStack" component={AboutStack} />
        </DrawerNavigator.Navigator>
    </NavigationContainer>
  )
}

export default DrawerNav

const styles = StyleSheet.create({})