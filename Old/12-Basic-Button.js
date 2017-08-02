import React, { Component } from 'react';
import { Button, View, Alert } from 'react-native';

export default class BasicButton extends Component {
  render() {
    return (
      <View style={{padding: 40}}>
        <Button title='Press Me!' onPress={() => { Alert.alert('You tapped the button!'); }} />
      </View>
    )
  }
}
