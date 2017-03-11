/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Home from './src/components/home/Index.js'

export default class kumpulberbagi extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Home />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

AppRegistry.registerComponent('kumpulberbagi', () => kumpulberbagi);
