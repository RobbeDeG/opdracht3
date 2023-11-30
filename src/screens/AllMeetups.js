import { StyleSheet, Text, View, FlatList, TouchableOpacity, Keyboard, Touchable } from 'react-native'
import { globalStyles } from '../styles/global'
import { Modal } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'; 
import { TouchableWithoutFeedback } from 'react-native';
import { Ionicons, Entypo} from '@expo/vector-icons'; 
import React, {useState} from 'react'
import Card from './shared/Card'
import uuid from 'react-native-uuid'
import NewMeetup from './NewMeetup';


const AllMeetups = (props) => {
  const [meetups, setMeetups] = useState([
    { title: "This is a first meetup", address: "Meetupstreet 1, 12345 Meetup City", description: "This is a first, amazing meetup which you definitely should not miss. It willbe a lot of fun!", favorite: false,  key: uuid.v4() },
    { title: "This is a second meetup", address: "Meetupstreet 2, 12345 Meetup City", description: "This is a second, amazing meetup which you definitely should not miss. It willbe a lot of fun!", favorite: false,  key: uuid.v4() },
  ]);

  const [modalOpen, setModalOpen] = useState(false);

  const pressHandler = (item) => {
    props.navigation.navigate("MeetupDetails", item);
  };

  const addMeetup = (review) => {
    review.key = uuid.v4();
    setMeetups((currentReviews) => {
      return [review, ...currentReviews];
    });
    setModalOpen(false);
  };

  const SetFavorite = (item) => {
    setMeetups((prevMeetups) =>
      prevMeetups.map((meetup) =>
        meetup === item ? { ...meetup, favorite: !meetup.favorite } : meetup
      )
    );
  };

  const UnFavorite = (item) => {
    setMeetups((prevMeetups) =>
      prevMeetups.map((meetup) =>
        meetup === item ? { ...meetup, favorite: !meetup.favorite } : meetup
      )
    );
  };

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen}>
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
          >
        <View>
          <MaterialIcons
            name="close"
            size={24}
            onPress={() => setModalOpen(false)}
            style={styles.modalToggle}
            />
          <NewMeetup addMeetup={addMeetup} />
        </View>
       </TouchableWithoutFeedback>
      </Modal>

      <View style={styles.flatlistview}>
      <FlatList
        numColumns={2}
        data={meetups}
        renderItem={({ item }) => (
            <Card>
              <View>
                <Text style={globalStyles.titleText}>{item.title}</Text>
              </View>
              <TouchableOpacity>
                <View style={styles.bottomContainer}>
                  <Ionicons name="information-circle" size={30} color="cornflowerblue" onPress={() => pressHandler(item)}/>
                  {item.favorite ? (
                    <Ionicons name="heart-outline" size={30} color="indianred" onPress={() => UnFavorite(item)}/>
                  ) : (
                    <Ionicons
                      name={item.favorite ? "heart-outline" : "heart-dislike-outline"}
                      size={30}
                      color="indianred"
                      onPress={() => SetFavorite(item)}
                    />
                  )}
                </View>
              </TouchableOpacity>
            </Card>
        )}
      />
      </View>

      <Entypo
        name="add-to-list"
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />
    </View>
  );
};

export default AllMeetups;

const styles = StyleSheet.create({
    modalToggle:{
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#777',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    flatlistview: {
        flex: 1,
        width: '100%',

    }
 });