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
function mapStateToProps(state){
  return {user:state.user};
}
function mapDispachToProps(dispach){
  let actions=bindActionCreators({login:login},dispach);
  return { ...actions, dispach };
}

 class Acount extends Component<{}> {
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
      login:this.login,
      password:this.password
    });
    console.log(this.state);
  }
  render() {
    return (
        <View style={{flex:1,paddingBottom: 10 }}>
         <View style={{height: 300,backgroundColor: '#05A5D1',flex:1}}>
         <View style={{flex:1}}>
          <Image style={{width: 50, height: 50}}
          source={{uri: 'https://www.japan-guide.com/g2/2366_04.jpg'}}/>
          </View>
          <View style={{flex:1}}>
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

export default connect(mapStateToProps,mapDispachToProps)(Acount);