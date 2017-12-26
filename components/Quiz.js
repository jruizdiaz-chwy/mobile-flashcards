import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { gray, green, white, red } from '../utils/colors';
import { objectToArray } from '../utils/helpers';
import TextButton from './TextButton';
import Button from './Button';

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

  handleShowAnswer = () => {
    this.setState((prevState) => ({
      showAnswer: !prevState.showAnswer
    }));
  }

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
      const score = Math.floor((correctAnswers / questionCount) * 100);

      return <View style={styles.outcomeContainer}>
        <Text style={styles.outcomeTitle}>
          That's it!
        </Text>
        <Text style={styles.outcomeSubtitle}>
          Let's see how you did...
        </Text>
        <View style={styles.outcomeStatContainer}>
          <Text style={styles.outcomeStatMainText}>
            {`${correctAnswers}/${questionCount}`}
          </Text>
          <Text style={styles.outcomeStatSecondaryText}>
            Correct answers
          </Text>
        </View>
        <View style={styles.outcomeStatContainer}>
          <Text style={styles.outcomeStatMainText}>
            {`${score}%`}
          </Text>
          <Text style={styles.outcomeStatSecondaryText}>
            Final score
          </Text>
        </View>
        <View style={styles.outcomeFooter}>
          <Text style={styles.outcomeFooterText}>
            {score > 70
              ? 'Great Job!'
              : 'Study hard and try again!'
            }
          </Text>
        </View>
      </View>;
    }
    const question = questions[index];
    return (
      <View style={styles.container}>
        <View style={styles.questionIndexContainer}>
          <Text>{`Question ${index + 1}/${questionCount}`}</Text>
          <Text>{`Correct ${correctAnswers}/${questionCount}`}</Text>
        </View>
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>
            {showAnswer
              ? question.answer
              : question.question
            }
          </Text>
          <TextButton onPress={this.handleShowAnswer} style={styles.textButton}>{
            showAnswer
              ? 'Show Question'
              : 'Show Answer'
          }
          </TextButton>
        </View>
        <View style={styles.buttonsContainer}>
          <Button textColor={white} backgroundColor={green} onPress={() => this.handleAnswer(true)}>Correct</Button>
          <Button textColor={white} backgroundColor={red} onPress={() => this.handleAnswer(false)}>Incorrect</Button>
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
  buttonsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    paddingBottom: 30,
    backgroundColor: green
  },
  questionContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
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
  },
  outcomeContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 30,
  },
  outcomeStatContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  outcomeFooter: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  outcomeTitle: {
    fontSize: 35,
    marginBottom: 10,
    textAlign: 'center',
    alignSelf: 'stretch',
  },
  outcomeSubtitle: {
    fontSize: 25,
    color: gray,
  },
  outcomeStatMainText: {
    fontSize: 30,
    marginBottom: 10,
  },
  outcomeStatSecondaryText: {
    fontSize: 18,
    color: gray,
  },
  outcomeFooterText: {
    fontSize: 30
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