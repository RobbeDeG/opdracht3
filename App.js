import 'react-native-gesture-handler';

import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View} from 'react-native';
import { useCallback } from 'react';

import DrawerNav from './src/routes/DrawerNav';
import HomeStack from './src/routes/HomeStack';
import { NavigationContainer } from '@react-navigation/native';

// 1. Splash screen component
// 2. useCallBack
// 3. fonts

// SplashScreen.preventAutoHideAsync();


export default function App() {
    // const [fontsLoaded] = useFonts({
    // 'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    // 'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
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
    // <View style={styles.container}>
        <DrawerNav/>
    // </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
