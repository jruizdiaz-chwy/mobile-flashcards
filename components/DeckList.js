import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import TextButton from './TextButton';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { objectToArray } from '../utils/helpers';
import { fetchDecks } from '../utils/api';
import { receiveDecks } from '../actions/deck';
import { AppLoading } from 'expo';
import DeckItem from './DeckItem';

class DeckList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false
    }
  }

  componentDidMount() {
    const { dispatch, decks } = this.props;
    fetchDecks()
      .then(decks => dispatch(receiveDecks(decks)))
      .then(this.setState({ ready: true }))
  }

  hanldePress = (id) => {
    this.props.navigation.navigate(
      'Deck',
      { id }
    );
  }

  renderItem = ({ item }) => {
    const cardCount = this.props.questions.filter(q => q.deck === item.title).length;
    return <DeckItem title={item.title} cardCount={cardCount} onPress={() => this.hanldePress(item.title)} />
  }

  render() {
    const { ready } = this.state;
    if (!ready) {
      return <AppLoading />
    }

    const { decks } = this.props;

    if (decks.length === 0) return (
      <View style={styles.container}>
        <Text style={styles.emptyText}>Looks like you don't have any deck yet. Please add one!</Text>
      </View>
    )

    console.log(`render method: ${JSON.stringify(decks)}`)
    return (
      <View style={styles.container}>
        <FlatList data={decks} renderItem={this.renderItem} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 20,
    paddingLeft: 20,
    paddingRight: 20,
  }
})

const mapStateToProps = ({ deck, question }, ownProps) => {
  return {
    decks: objectToArray(deck.byId),
    questions: objectToArray(question.byId)
  }
}

export default connect(mapStateToProps)(DeckList);