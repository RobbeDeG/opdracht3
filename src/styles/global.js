import { StatusBar, StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        padding: 20,
    },
    titleText: {
        // fontFamily: 'nunito-bold',
        fontWeight: 'bold',
        fontSize: 25,
        color: '#333',
    },
    ReviewTitleText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        marginTop: 20,
    },
    reviewText:{
        fontSize: 18,
    },
    screenOptions:{                    
        headerStyle: {backgroundColor: '#f4511e'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontSize: 30, fontWeight: 'bold'},   
    }
})

export const images = {
    ratings: {
        '1': require('../../assets/1Rating.png'),
        '2': require('../../assets/2Rating.png'),
        '3': require('../../assets/3Rating.png'),
        '4': require('../../assets/4Rating.png'),
        '5': require('../../assets/5Rating.png'),
    }
}