import { StyleSheet, View, Button, Text} from 'react-native'
import { TextInput } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import React from 'react'

const reviewSchema = Yup.object({
  title: Yup.string().required().min(4),
  address: Yup.string().required().min(4),
  description: Yup.string().required().min(8)
});

const NewMeetup = ({ addMeetup }) => {
  return (
    <View>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        validationSchema={reviewSchema}
        onSubmit={(values) => addMeetup(values)}
      >
        {(props) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Title"
              onChangeText={props.handleChange("title")}
              value={props.values.title}
              onBlur={props.handleBlur("title")}
            />
            <Text style={styles.errorText}>
              {props.errors.title && props.touched.title && (
                <Text>{props.errors.title}</Text>
              )}
            </Text>
            <TextInput
              multiline
              style={styles.input}
              placeholder="Address"
              onChangeText={props.handleChange("address")}
              value={props.values.address}
              onBlur={props.handleBlur("address")}
            />
            <Text style={styles.errorText}>
              {props.errors.address && props.touched.address && (
                <Text>{props.errors.address}</Text>
              )}
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Description"
              onChangeText={props.handleChange("description")}
              value={props.values.description}
              onBlur={props.handleBlur("description")}
            />
            <Text style={styles.errorText}>
              {props.errors.description && props.touched.description && (
                <Text>{props.errors.description}</Text>
              )}
            </Text>
            <Button title="Submit" color="gray" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default NewMeetup;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    margin: 10,
  },
  errorText: {
    color: "crimson",
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 6,
    textAlign: "center",
  },
});