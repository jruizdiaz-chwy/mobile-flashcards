import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextButton from './TextButton';
import { connect } from 'react-redux';

class AddQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{`Add Question View #${this.props.id}`}</Text>
        <TextButton
          onPress={() => this.props.navigation.navigate(
            'Deck',
            { id: this.props.id }
          )}
          style={styles.textBtn}
        >
          Cancel
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

export default connect(mapStateToProps, {})(AddQuestion);