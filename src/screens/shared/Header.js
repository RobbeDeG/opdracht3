import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../../styles/global'
import { StatusBar } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'; 
import { ImageBackground } from 'react-native';

const Header = ({navigation, title}) => {
    const openMenu = () => {
        navigation.openDrawer()
    }
    
  return (
    <ImageBackground source={require("../../../assets/Background.png")}style={styles.header}>
        <MaterialIcons name="menu" size={28} color="black" style={styles.icon} onPress={openMenu}/>
        <Text style={styles.headerText}>{title}</Text>
    </ImageBackground>
  )
}

export default Header

const styles = StyleSheet.create({
    header: { 
        height: 60,
        marginTop: StatusBar.currentHeight,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4511e',
    },
    headerText:{
        fontWeight: 'bold',
        fontSize: 25,
        color: '#333',
    },
    icon:{
        position: 'absolute',
        left: 10,
    }
})