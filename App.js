import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { deck } from './reducers/deck';
import { question } from './reducers/question';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { green, white, gray } from './utils/colors';
import { Constants } from 'expo';
import Deck from './components/Deck';
import DeckList from './components/DeckList';
import AddDeck from './components/AddDeck';
import AddQuestion from './components/AddQuestion';
import Question from './components/Question';

const rootReducer = combineReducers({ deck, question });


const DeckTabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      title: 'Decks'
    }
  },
  NewDeck: {
    screen: AddDeck,
    navigationOptions: {
      title: 'New Deck'
    }
  },
});

const QuestionTabs = TabNavigator({
  Deck: {
    screen: Deck
  },
  AddQuestion: {
    screen: AddQuestion,
    navigationOptions: {
      title: 'New Question'
    }
  },
});

const MainNavigator = StackNavigator({
  DeckListTabs: {
    screen: DeckTabs
  },
  Deck: {
    screen: QuestionTabs
  },
  Question: {
    screen: Question
  }
});

const AppStatusBar = ({ backgroundColor, ...props }) => {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(rootReducer)}>
        <View style={styles.container}>
          <AppStatusBar backgroundColor={green} barStyle='light-content' />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
