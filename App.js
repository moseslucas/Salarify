import React, { Component } from 'react';
import {
  WebView
} from 'react-native';

const App = _ => {
  return <WebView source={{uri: 'http://app.salarium.com'}}/>
}

export default App
