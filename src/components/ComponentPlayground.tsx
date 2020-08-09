import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, StatusBar, Text, View} from 'react-native';
import CheckBox from './CheckBox';

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
});

export default function ComponentPlayground() {
  const [check, setCheck] = useState(false);
  return (
    <View>
      <CheckBox
        checked={check}
        label="check this"
        onPress={() => setCheck(!check)}
      />
    </View>
  );
}
