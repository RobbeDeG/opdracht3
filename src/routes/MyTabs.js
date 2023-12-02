import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AboutStack from './AboutStack';
import HomeStack from './HomeStack';
import Header from '../screens/shared/Header';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeStack}
                options={({ navigation }) => ({
                    header: () => <Header navigation={navigation} title="All Meetups" />,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="list" size={size} color={color} />
                    ),
                })}
            />        
            <Tab.Screen
                name="About"
                component={AboutStack}
                options={({ navigation }) => ({
                    header: () => <Header navigation={navigation} title="About" />,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="information" size={size} color={color} />
                    ),
                })}
            />
        </Tab.Navigator> 
    </NavigationContainer>
  );
}

export default MyTabs;