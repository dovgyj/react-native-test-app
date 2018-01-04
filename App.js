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
  TextInput,
  Button,
  Alert,
  TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback,
  ScrollView,FlatList,
  Image
} from 'react-native';
import Login from './components/Login.js';
import Acount from './components/Acount.js';
import { Provider } from 'react-redux';
import store from './reducers/user.js';
import { Router, Scene } from 'react-native-router-flux';

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  render() {
    return (
       <Provider store={store}>
         <Router>
            <Scene key="root">
              <Scene key="login" component={Login} title="Вход" initial={true} />
              <Scene key="acount" component={Acount} title="Акаунт"  />
            </Scene>
           </Router>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  myclass:{
    justifyContent: 'flex-end',
    flex: 1,
    alignItems: 'flex-end',
    color: '#000000'

  }
});
