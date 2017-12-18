import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import TextButton from './TextButton';

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  static navigationOptions = ({ navigation }) => {
    const { id } = navigation.state.params;

    return {
      title: `Deck #${id}`
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{`Deck #${this.props.id}`}</Text>
        <TextButton
          onPress={() => this.props.navigation.navigate(
            'AddQuestion',
            { id: this.props.id }
          )}
        >
          Add Question
        </TextButton>
        <TextButton
          onPress={() => this.props.navigation.navigate(
            'Question',
            { id: this.props.id, questionId: 1 }
          )}
        >
          Question #1
        </TextButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

const mapStateToProps = (state, { navigation }) => {
  const { id } = navigation.state.params;
  return {
    id
  }
}

export default connect(mapStateToProps, {})(Deck);