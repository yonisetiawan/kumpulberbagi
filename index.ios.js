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
  View,
  Navigator
} from 'react-native';
import Home from './src/components/home/Index.js'
import Youtube from './src/components/youtube/index.js'

export default class kumpulberbagi extends Component {
  render() {
    return (
      <Navigator initialRoute={{page: 'home', youtubeurl:'http://amazon.com'}}
        renderScene={(route, navigator)=>{
          switch(route.page){
            case 'home':
              return <Home navigator={navigator} route={route}/>
            case 'youtube':
              return  <Youtube navigator={navigator} route={route}/>
            default:
              return <Home />
          }
        }} />
    );
  }
}


AppRegistry.registerComponent('kumpulberbagi', () => kumpulberbagi);
