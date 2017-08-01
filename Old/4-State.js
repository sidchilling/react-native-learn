import React, { Component } from 'react';
import { View, Text } from 'react-native';

class BlinkComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    setInterval(() => {
      this.setState(previousState => {
        return {showText: !previousState.showText};
      });
    }, 1000);
  }

  render() {
    let displayText = this.state.showText ? this.props.name : ' ';
    return (
      <Text>{displayText}</Text>
    );
  }
}

export default class BlinkApp extends Component {
  render() {
    return (
      <View>
        <BlinkComponent name='I love to blink' />
        <BlinkComponent name='Yes blinking is so great' />
        <BlinkComponent name='Why did they ever take this out from HTML' />
        <BlinkComponent name='Look at me look at me look at me' />
      </View>
    );
  }
}