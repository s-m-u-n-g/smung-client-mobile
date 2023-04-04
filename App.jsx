import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{ uri: 'http://127.0.0.1:5500/index.html' }} />
    </SafeAreaView>
  );
}
