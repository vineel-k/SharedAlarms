import ComponentPlayground from './ComponentPlayground';
import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
});

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeView}>
        <ComponentPlayground />
      </SafeAreaView>
    </>
  );
}
