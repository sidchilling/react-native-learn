import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View>
        <Text>Hello, World!</Text>
        <Text>This is the first example of the tutorial!</Text>
        <Text>Ok, we will move this to another file</Text>
      </View>
    );
  }
}