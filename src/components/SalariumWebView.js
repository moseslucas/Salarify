import React from 'react';
import { WebView } from 'react-native'

const SalariumWebView = _ => {
  jsCode = `
    $('[name=email]').val('moses@proudcloud.io');
    $('[name=password]').val('1nePiece');
  `
  return <WebView
    source={{uri: 'http://app.salarium.com'}}
    injectedJavaScript={jsCode}
    javaScriptEnabledAndroid
  />
}

export default SalariumWebView
