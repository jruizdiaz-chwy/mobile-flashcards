import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { red, green, white } from '../utils/colors';
import { objectToArray } from '../utils/helpers';
import Button from './Button';
import Question from './Question';
import QuizOutcome from './QuizOutcome';

/**
 * @description Renders a quiz view with controls to answer questions and a final result summary. 
 * @constructor
 * @extends React.Component.
 * @param {object} props An object with: the associated deck, it's questions and the number of questions.
 */
class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      showAnswer: false,
      showQuizOutcome: false,
      correctAnswers: 0
    }
  }

  /**
  * @description Checks the answer value and updates the correctAnswers count,
  * if last question was answered, updates state to show quiz results.
  * @return {Void}
  */
  handleAnswer = (answerValue) => {
    const showOutCome = (this.state.index + 1) === this.props.questionCount;
    let correctCount = this.state.correctAnswers;
    if (answerValue) correctCount += 1;
    this.setState((prevState) => ({
      ...prevState,
      showQuizOutcome: showOutCome,
      correctAnswers: correctCount,
      index: prevState.index + 1,
    }));
  }

  render() {
    const { index, showAnswer, correctAnswers, showCorrect, showIncorrect, showQuizOutcome } = this.state;
    const { questions, questionCount } = this.props;

    if (showQuizOutcome) {
      return <QuizOutcome
        correctAnswers={correctAnswers}
        questionCount={questionCount}
         />
    }

    const question = questions[index];

    return (
      <View style={styles.container}>
        <View style={styles.questionIndexContainer}>
          <Text>{`Question ${index + 1}/${questionCount}`}</Text>
          <Text>{`Correct ${correctAnswers}/${questionCount}`}</Text>
        </View>
        <Question question={question.question} answer={question.answer} />
        <View style={styles.buttonsContainer}>
          <Button
            textColor={white}
            backgroundColor={green}
            onPress={() => this.handleAnswer(true)}
          >
            Correct
          </Button>
          <Button
            textColor={white}
            backgroundColor={red}
            onPress={() => this.handleAnswer(false)}
          >
            Incorrect
          </Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 30,
  },
  questionIndexContainer: {
    flex: 0.5,
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

const mapStateToProps = ({ question }, { navigation }) => {
  const { deck, questionCount } = navigation.state.params;
  const questions = objectToArray(question.byId).filter(q => q.deck === deck);

  return {
    deck,
    questionCount,
    questions
  }
}

export default connect(mapStateToProps, {})(Quiz);