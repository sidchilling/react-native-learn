import React, { Component } from 'react';
import { Button, View, Alert, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    flexDirection: 'column',
  },
  blueButtonParentView: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  purpleButtonParentView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  twoButtonsParentView: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  }
});

export default class ManyButtons extends Component {
  _blueButtonPressed() {
    Alert.alert('The blue Press Me is pressed');
  }

  _purpleButtonPressed() {
    Alert.alert('The purple Press Me is pressed');
  }

  _looksGreatPressed() {
    Alert.alert('Hey, you do look great!');
  }

  _okButtonPressed() {
    Alert.alert('Ok now, stop playing with me!!');
  }

  render() {
    return (
      <View style={styles.parentView}>

        <View style={styles.blueButtonParentView}>
          <Button title='Press Me' onPress={this._blueButtonPressed} />
        </View>
        <View style={styles.purpleButtonParentView}>
          <Button color='purple' title='Press Me' onPress={this._purpleButtonPressed} />
        </View>
        <View style={styles.twoButtonsParentView}>
          <Button title='This looks great!' onPress={this._looksGreatPressed} />
          <Button title='OK!' color='purple' onPress={this._okButtonPressed} />
        </View>

      </View>
    );
  }
}