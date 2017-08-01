import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class FixedDimensionsBasics extends Component {
  render() {
    return (
      <View>
        <View style={styles.powderBlue} />
        <View style={styles.skyBlue} />
        <View style={styles.steelBlue} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  powderBlue: {
    width: 50,
    height: 50,
    backgroundColor: 'powderblue',
  },
  skyBlue: {
    width: 100,
    height: 100,
    backgroundColor: 'skyblue',
  },
  steelBlue: {
    width: 150,
    height: 150,
    backgroundColor: 'steelblue',
  },
});