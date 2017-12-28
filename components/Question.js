import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import TextButton from './TextButton';
import PropTypes from 'prop-types';
import { gray } from '../utils/colors';

/**
 * @description Renders a question card and a button to flip the card and show it's answer. 
 * @constructor
 * @extends React.Component.
 * @param {object} props An object with: the question and the answer to show.
 */
export default class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAnswer: false
    }

    this.handleShowAnswer.bind(this);
  }

  handleShowAnswer = () => {
    this.setState((prevState) => ({
      showAnswer: !prevState.showAnswer
    }));
  }

  render() {
    const { question, answer } = this.props;
    const { showAnswer } = this.state;

    return (
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>
          {showAnswer
            ? answer
            : question
          }
        </Text>
        <TextButton onPress={this.handleShowAnswer} style={styles.textButton}>{
          showAnswer
            ? 'Show Question'
            : 'Show Answer'
        }
        </TextButton>
      </View>
    )
  }
}

Question.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
  questionContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 30,
  },
  questionText: {
    fontSize: 35,
    marginBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    textAlign: 'center'
  },
  textButton: {
    fontSize: 18,
    color: gray
  }
})