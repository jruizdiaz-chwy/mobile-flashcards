import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Button from './Button';
import { gray, green, white } from '../utils/colors';
import { addDeck } from '../actions/deck';
import { saveDeck } from '../utils/api';

class AddDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }

  toDeckList = () => {
    this.props.navigation.dispatch(NavigationActions.back({
      key: 'AddDeck'
    }));
  }

  handleAddDeck = () => {
    const deck = this.state;
    const { dispatch } = this.props;
    
    dispatch(addDeck(deck));

    saveDeck(deck);

    this.setState({
      title: ''
    });

    this.toDeckList();
  }

  render() {
    const { title } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Give your deck a title</Text>
        <TextInput
          style={styles.inputText}
          value={title}
          onChangeText={(text) => this.setState({ title: text })}
        />
        <Button textColor={white} backgroundColor={green} onPress={this.handleAddDeck}>
          Add Deck
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 35,
    paddingLeft: 30,
    paddingRight: 30
  },
  inputText: {
    textAlign: 'center',
    fontSize: 25,
    height: 50,
    width: 300,
    borderColor: gray,
    borderWidth: 0
  }
})

export default connect()(AddDeck)