import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  size: {
    height: 50,
    width: 50,
  },
  powderBlue: {
    backgroundColor: 'powderblue',
  },
  skyBlue: {
    backgroundColor: 'skyblue',
  },
  steelBlue: {
    backgroundColor: 'steelblue',
  },
});

class JustifyContentComponent extends Component {
  render() {
    const flexDirection = this.props.flexDirection;
    const justifyContent = this.props.justifyContent;
    return (
      <View style={{flex: 1, flexDirection, justifyContent}}>
        <View style={[styles.size, styles.powderBlue]} />
        <View style={[styles.size, styles.skyBlue]} />
        <View style={[styles.size, styles.steelBlue]} />
      </View>
    );
  }
}

export default class RunJustifyContent extends Component {
  render() {
    return (
      //<JustifyContentComponent flexDirection='column' justifyContent='flex-start' />
      // <JustifyContentComponent flexDirection='column' justifyContent='center' />
      // <JustifyContentComponent flexDirection='column' justifyContent='flex-end' />
      // <JustifyContentComponent flexDirection='column' justifyContent='space-around' />
      // <JustifyContentComponent flexDirection='column' justifyContent='space-between' />

      // <JustifyContentComponent flexDirection='row' justifyContent='flex-start' />
      // <JustifyContentComponent flexDirection='row' justifyContent='center' />
      // <JustifyContentComponent flexDirection='row' justifyContent='flex-end' />
      // <JustifyContentComponent flexDirection='row' justifyContent='space-around' />
      <JustifyContentComponent flexDirection='row' justifyContent='space-between' />
    );
  }
}