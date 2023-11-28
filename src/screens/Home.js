import { StyleSheet, Text, View, FlatList, TouchableOpacity, Keyboard } from 'react-native'
import { globalStyles } from '../styles/global'
import { Modal } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import React, {useState} from 'react'
import Card from '../screens/shared/Card'
import ReviewForm from './ReviewForm'
import uuid from 'react-native-uuid'


const Home = (props) => {
  const [reviews, setReviews] = useState([
    { title: "Zelda", rating: 5, body: "Dit is Zelda", key: uuid.v4() },
    { title: "Giant", rating: 4, body: "Dit is Giant", key: uuid.v4() },
    { title: "Mini", rating: 3, body: "Dit is Mini", key: uuid.v4() },
  ]);

  const [modalOpen, setModalOpen] = useState(false);

  const pressHandler = (item) => {
    props.navigation.navigate("ReviewDetails", item);
  };

  const addReview = (review) => {
    review.key = uuid.v4();
    setReviews((currentReviews) => {
      return [review, ...currentReviews];
    });
    setModalOpen(false);
  };

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
        ></TouchableWithoutFeedback>
        <View>
          <MaterialIcons
            name="close"
            size={24}
            onPress={() => setModalOpen(false)}
            style={styles.modalToggle}
          />
          <ReviewForm addReview={addReview} />
        </View>
      </Modal>

      <Entypo
        name="add-to-list"
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item)}>
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    modalToggle:{
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#777',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
 });