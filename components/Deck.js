import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { gray, green, white, black } from '../utils/colors';
import TextButton from './TextButton';
import Button from './Button';
import { objectToArray } from '../utils/helpers';

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  static navigationOptions = ({ navigation }) => {
    const { id } = navigation.state.params;

    return {
      title: id
    }
  }

  goToQuiz = () => {
    const { navigation, questions } = this.props;
    navigation.navigate(
      'Quiz',
      {
        deck: navigation.state.params.id,
        questionCount: questions.length
      })
  }

  render() {
    const { title, questions, navigation } = this.props;
    const cardsNumber = questions.length;
    return (
      <View style={styles.container}>
        <View style={[styles.container, { flex: 2 }]}>
          <Text style={styles.titleText}>
            {this.props.title}
          </Text>
          <Text style={styles.cardsText}>
            {`${cardsNumber} cards`}
          </Text>
        </View>
        <View style={styles.container}>
          {cardsNumber > 0 
            ? <Button
                backgroundColor={white}
                textColor={green}
                onPress={this.goToQuiz}
              >
                Start Quiz
              </Button>
            : <Text style={styles.noCardsText}>This deck has no questions yet!</Text> 
            }
        <Button backgroundColor={green} textColor={white} onPress={() => console.log('AddQuestion')}>
          Add Question
        </Button>
      </View>
      </View >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 40,
    marginBottom: 5
  },
  cardsText: {
    fontSize: 18,
    color: gray
  },
  noCardsText: {
    fontSize: 18,
    color: gray,
    marginBottom: 10
  }
})

const mapStateToProps = ({ deck, question }, { navigation }) => {
  const { id } = navigation.state.params;
  const title = deck.byId[id].title;
  const questions = objectToArray(question.byId).filter(q => q.deck === title);
  return { navigation, title, questions };
}

export default connect(mapStateToProps, {})(Deck);