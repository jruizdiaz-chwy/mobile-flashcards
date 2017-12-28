import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './Button';
import PropTypes from 'prop-types';
import { gray } from '../utils/colors';

/**
 * @description Renders a view with result summary of a quiz. 
 * @constructor
 * @extends React.Component.
 * @param {object} props An object with: the number of questions answered and the number of correct answers.
 */
const QuizOutcome = ({ questionCount, correctAnswers }) => {
  const score = Math.floor((correctAnswers / questionCount) * 100); 
  return (
    <View style={styles.outcomeContainer}>
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
            {score > 70 ? 'Great Job! 👏' : 'Study hard and try again! 💪'}
          </Text>
        </View>
      </View>
  )
}

QuizOutcome.propTypes = {
  questionCount: PropTypes.number.isRequired,
  correctAnswers: PropTypes.number.isRequired,
}

const styles = StyleSheet.create({
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
    fontSize: 30,
    padding: 40,
    textAlign: 'center'
  }
})

export default QuizOutcome;
