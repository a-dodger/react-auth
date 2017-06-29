import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
      firebase.initializeApp({
        apiKey: 'AIzaSyDp5VZeBvp6q6UErDvSWB0ldkb73FzKg40',
        authDomain: 'authentication-935bb.firebaseapp.com',
        databaseURL: 'https://authentication-935bb.firebaseio.com',
        projectId: 'authentication-935bb',
        storageBucket: 'authentication-935bb.appspot.com',
        messagingSenderId: '211561943137'
      });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
