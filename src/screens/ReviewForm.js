import { StyleSheet, View, Button, Text} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { globalStyles } from '../styles/global'
import { Formik } from 'formik'
import * as Yup from 'yup'
import React from 'react'

const reviewSchema = Yup.object({
  title: Yup.string().required().min(4),
  body: Yup.string().required().min(8),
  rating: Yup.string()
    .required()
    .test("is-num-1-5", "Rating must be a number 1-5", (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

const ReviewForm = ({ addReview }) => {
  return (
    <View>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        validationSchema={reviewSchema}
        onSubmit={(values) => addReview(values)}
      >
        {(props) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Review title"
              onChangeText={props.handleChange("title")}
              value={props.values.title}
              onBlur={props.handleBlur("title")}
            />
            <Text style={styles.errorText}>
              {props.errors.title && props.touched.title}
            </Text>
            <TextInput
              multiline
              style={styles.input}
              placeholder="Review details"
              onChangeText={props.handleChange("body")}
              value={props.values.body}
              onBlur={props.handleBlur("body")}
            />
            <Text style={styles.errorText}>
              {props.errors.title && props.touched.title}
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Rating (1-5)"
              onChangeText={props.handleChange("rating")}
              value={props.values.rating}
              keyboardType="numeric"
              onBlur={props.handleBlur("rating")}
            />
            <Text style={styles.errorText}>
              {props.errors.title && props.touched.title}
            </Text>
            <Button title="Submit" color="gray" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default ReviewForm;

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