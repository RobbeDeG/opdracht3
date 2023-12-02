import 'react-native-gesture-handler';

import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View} from 'react-native';
import { useCallback } from 'react';

import MyTabs from './src/routes/MyTabs';
import { NavigationContainer } from '@react-navigation/native';

//SplashScreen.preventAutoHideAsync();


export default function App() {
    // const [fontsLoaded] = useFonts({
    // 'Dhurjati-Regular': require('./assets/fonts/Dhurjati-Regular.ttf'),
    // });

    // const onLayoutRootView = useCallback(async () => {
    // if (fontsLoaded) {
    //     await SplashScreen.hideAsync();
    // }
    // }, [fontsLoaded]);

    // if (!fontsLoaded) {
    //     return null;
    // }

    return (
    //<View style={styles.container}>
      <MyTabs/>
    //</View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Dhurjati-Regular',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
