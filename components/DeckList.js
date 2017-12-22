import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import TextButton from './TextButton';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { objectToArray } from '../utils/helpers';
import DeckItem from './DeckItem';

class DeckList extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    console.log(JSON.stringify(this.props.decks))
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
    return (
      <View style={styles.container}>
        <FlatList data={this.props.decks} renderItem={this.renderItem} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

const mapStateToProps = ({ deck, question }, ownProps) => {
  return {
    decks: objectToArray(deck.byId),
    questions: objectToArray(question.byId)
  }
}

export default connect(mapStateToProps, {})(DeckList);