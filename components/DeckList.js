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

  renderItem = ({ item }) => {
    return <DeckItem title={item.title} cardsNumber={item.questions.length} />
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
  },
  // textBtn: {
  //   position: 'absolute',
  //   width: 60,  
  //   height: 60, 
  //   right: 10,
  //   bottom: 10,
  // }
})

const mapStateToProps = ({ deck }, ownProps) => {
  return {
    decks: objectToArray(deck.byId)
  }
}

export default connect(mapStateToProps, {})(DeckList);