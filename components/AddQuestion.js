import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TextInput, ToastAndroid, KeyboardAvoidingView } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Button from './Button';
import { gray, green, white } from '../utils/colors';
import { addQuestion } from '../actions/question';
import { saveQuestion } from '../utils/api';
import { guid } from '../utils/helpers';

/**
 * @description Renders a view with input to create a question. 
 * @constructor
 * @extends React.Component.
 * @param {object} props An object with no relevant properties in this case.
 */
class AddDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: '',
    }
  }

  toDeck = () => {
    this.props.navigation.dispatch(NavigationActions.back());
  }

  /**
  * @description Adds the question to the phone's storage, 
  * updates the redux state and navigates back to the deck list view.
  * @return {Void}
  */
  handleAddQuestion = () => {
    const { question, answer } = this.state;
    const { dispatch, deck } = this.props;

    if (question !== '' && answer !== '') {

      const questionObject = {
        id: guid(),
        question,
        answer,
        deck
      }

      dispatch(addQuestion(questionObject));

      saveQuestion(questionObject);

      this.setState({
        question: '',
        answer: ''
      });

      this.toDeck();

    } else {
      ToastAndroid.show('You must provide both fields!', ToastAndroid.SHORT)
    }
  }

  render() {
    const { question, answer } = this.state;
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text style={styles.titleText}>Insert your question</Text>
        <TextInput
          style={styles.inputText}
          value={question}
          onChangeText={(text) => this.setState({ question: text })}
        />
        <Text style={styles.titleText}>Give it an answer</Text>
        <TextInput
          style={styles.inputText}
          value={answer}
          onChangeText={(text) => this.setState({ answer: text })}
        />
        <Button
          disabled={true}
          textColor={white}
          backgroundColor={green}
          onPress={this.handleAddQuestion}>
          Add Question
        </Button>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 35,
    paddingLeft: 30,
    paddingRight: 30
  },
  inputText: {
    textAlign: 'center',
    fontSize: 25,
    height: 50,
    width: 300,
    borderColor: gray,
    borderWidth: 0
  }
})

const mapStateToProps = (state, { navigation }) => {
  const deck = navigation.state.params.deck;
  return {
    deck
  }
}

export default connect(mapStateToProps)(AddDeck)