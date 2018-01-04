/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


export default class Mycomponent extends Component<{}> {
  render() {
       let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.myContainer}>
        <Image source={pic} style={{flex:1}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  myContainer:{
    backgroundColor:'green',
    flex:1,
    padding:20
  },
  myText:{
    color:'#ffffff'
  }
});
