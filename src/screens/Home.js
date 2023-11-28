import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native'
import { globalStyles } from '../styles/global'
import React, {useState} from 'react'
import Card from '../screens/shared/Card'

const Home = (props) => {

    const [reviews, setReviews] = useState([
        {title: "Zelda", rating: 5, body: "Dit is Zelda haar beschrijving", key: "1"},
        {title: "Giant", rating: 4, body: "Dit is Giant zijn beschrijving", key: "2"},
        {title: "Mini", rating: 3, body: "Dit is Mini haar beschrijving", key: "3"},
    ])


    const pressHandler = (item) => {
        props.navigation.push("ReviewDetails", item)
    }

    return (
    <View style={globalStyles.container}>
        <FlatList 
            data={reviews} 
            renderItem={({item}) => (
            <TouchableOpacity onPress={(() => pressHandler(item))}>
                <Card>
                    <Text style={globalStyles.titleText}>{item.title }</Text>
                </Card>
            </TouchableOpacity>
        )} 
        />
    </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})