import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import deck from './reducers/deck';
import question from './reducers/question';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { green, white, gray } from './utils/colors';
import { Constants } from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Deck from './components/Deck';
import DeckList from './components/DeckList';
import AddDeck from './components/AddDeck';
import AddQuestion from './components/AddQuestion';
import Question from './components/Question';

const DeckTabs = TabNavigator(
  {
    DeckList: {
      screen: DeckList,
      navigationOptions: {
        tabBarLabel: 'Decks',
        tabBarIcons: ((tintColor) => <MaterialCommunityIcons name='cards-outline' size={30} color={tintColor} />)
      }
    },
    NewDeck: {
      screen: AddDeck,
      navigationOptions: {
        tabBarLabel: 'New Deck',
        tabBarIcons: ((tintColor) => <MaterialCommunityIcons name='library-plus' size={30} color={tintColor} />)
      }
    },
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarUnderlineStyle: { backgroundColor: white },
    tabBarOptions: {
      activeTintColor: white,
      style: {
        height: 56,
        backgroundColor: green
      },
      indicatorStyle: {
        backgroundColor: white,
        shadowColor: 'rgba(0,0,0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
);

const MainNavigator = StackNavigator({
  DeckListTabs: {
    screen: DeckTabs
  },
  Deck: {
    screen: Deck
  },
  AddQuestion: {
    screen: AddQuestion,
    navigationOptions: {
      title: 'New Question'
    }
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

const rootReducer = combineReducers({ deck, question });

const store = createStore(rootReducer);
console.log(JSON.stringify(store.getState().deck));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
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
