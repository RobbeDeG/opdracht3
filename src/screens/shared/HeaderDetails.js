import { StyleSheet, Text, Image} from 'react-native'
import React from 'react'
import { StatusBar } from 'react-native'
import { MaterialIcons, Ionicons } from '@expo/vector-icons'; 
import { ImageBackground } from 'react-native';

const HeaderDetails = ({navigation}) => {
    const GoBack = () => {
        navigation.goBack()
    }
    
  return (
    <ImageBackground source={require("../../../assets/Background.png")}style={styles.header}>
        <Ionicons name="arrow-back" size={28} color="black" style={styles.icon} onPress={GoBack}/>
        <MaterialIcons name="nature-people" size={24} color="black" /> 
        <Text style={styles.headerText}>Details</Text>       
    </ImageBackground>
  )
}

export default HeaderDetails

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
    },
    headerImage:{
        width: 35,
        height: 35,
        marginHorizontal: 10,
    }
})