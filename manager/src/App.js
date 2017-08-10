import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDJz3ZRvnnCCGEtBn5YkKLyAkZ5cS3Rr6I',
      authDomain: 'manager-4b407.firebaseapp.com',
      databaseURL: 'https://manager-4b407.firebaseio.com',
      projectId: 'manager-4b407',
      storageBucket: '',
      messagingSenderId: '193483408050'
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
