import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { gray, green, white, red } from '../utils/colors';
import TextButton from './TextButton';
import Button from './Button';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAnswer: false,
      correctAnswers: 0
    }
  }

  handleShowAnswer = () => {
    this.setState((prevState) => ({
      showAnswer: !prevState.showAnswer 
    }))
  }

  render() {
    const { question, answer } = this.props;
    const { index, questionCount } =this.props.navigation.state.params;
    const { showAnswer, correctAnswers } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.questionIndexContainer}>
          <Text>{`Question ${index}/${questionCount}`}</Text>
          <Text>{`Correct ${correctAnswers}/${questionCount}`}</Text>
        </View>
        <View style={styles.questionContainer}>
          <Text style={styles.mainText}>
            {showAnswer 
              ? answer
              : question
            }
          </Text>
        <TextButton onPress={this.handleShowAnswer} color={styles.answerTextButton}>{
          showAnswer
            ? 'Show Question'
            : 'Show Answer'
          }
        </TextButton>
        </View>
        <View style={styles.container}>
          <Button textColor={white} backgroundColor={green}>Correct</Button>
          <Button textColor={white} backgroundColor={red}>Incorrect</Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30,
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
  mainText: {
    fontSize: 35,
    marginBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    textAlign: 'center'
  },
  answerTextButton: {
    fontSize: 18,
    color: gray
  }
})

const mapStateToProps = ({ question }, { navigation }) => {
  const q =  question.byId[navigation.state.params.id];
  return {
    navigation,
    ...q
  }
}

export default connect(mapStateToProps, {})(Quiz);