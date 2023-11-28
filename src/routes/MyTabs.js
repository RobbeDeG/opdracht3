import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
        <Tab.Screen
            name="All Meetups"
            component={AllMeetups}
            options={({ navigation }) => ({
                header: () => <Header navigation={navigation} title="All Meetups" />,
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="list" size={size} color={color} />
                ),
            })}
        />        
        <Tab.Screen
            name="Meetup Details"
            component={MeetupDetails}
            options={({ navigation }) => ({
                header: () => <HeaderDetails navigation={navigation} title="Meetup Details" />,
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="information-circle" size={size} color={color} />
                ),
            })}
        />
        <Tab.Screen
            name="About"
            component={About}
            options={({ navigation }) => ({
                header: () => <Header navigation={navigation} title="About" />,
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="information" size={size} color={color} />
                ),
            })}
        />
    </Tab.Navigator> 
  );
}

export default MyTabs;