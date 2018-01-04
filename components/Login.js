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
  ScrollView,FlatList
} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {login} from '../actions';
import { Actions } from 'react-native-router-flux';
function mapStateToProps(state){
  console.log('triger store change ',state);
  return {user:state.user};
}
function mapDispachToProps(dispach){
  let actions=bindActionCreators({login:login},dispach);
  return { ...actions, dispach };
}

 class Login extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password:''
    };
  }
  _login() {
    Alert.alert('You tapped the button!');
    this.props.login({
      login:this.state.login,
      password:this.state.password
    });
    console.log(this.props);
    if(this.props.user.loggedIn){
      Actions.acount();
    }
  }
  render() {
    return (
        <View style={{flex:1,justifyContent: 'center' }}>
         <View style={{height: 300,backgroundColor: '#05A5D1'}}>
          <View style={styles.flexItem}>
             <Text style={styles.h3}>Вход</Text>
          </View>
          <View style={styles.flexItem}>
                   <TextInput placeholder='login'
              style={{height: 40, borderColor: '#ffffff', borderWidth: 1,width: 300,padding: 3}}
              onChangeText={(login) => this.setState({login:login})}
              value={this.state.login}
                />
          </View>
          <View style={styles.flexItem}>
              <TextInput placeholder='password'
                style={{height: 40, borderColor: '#ffffff', borderWidth: 1,width: 300,padding: 3,secureTextEntry:1}}
                onChangeText={(password) => {this.setState({password:password})
              }}
                value={this.state.password} secureTextEntry={true}
                    />
          </View>
          <View style={styles.flexItem}>
            <Button
              onPress={this._login.bind(this)}
              title="Войти"
              color="#841584"
            />
          </View>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  flexItem:{
    flex:1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'

  },
  h3:{
    color:'black',
    fontSize: 20
  }
});

export default connect(mapStateToProps,mapDispachToProps)(Login);