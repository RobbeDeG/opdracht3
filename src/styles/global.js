import { StatusBar, StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        padding: 20,
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#333',
        textAlign: 'center',
    },
    detailTitleText: {
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 20,
        color: 'lightblue',
        marginTop: 20,
        textAlign: 'center',
    },
    detailText:{
        fontSize: 18,
        textAlign: 'center',
    },
    screenOptions:{                    
        headerStyle: {backgroundColor: '#f4511e'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontSize: 30, fontWeight: 'bold'},   
    }
})

