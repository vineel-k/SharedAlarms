import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, StatusBar, Text, View} from 'react-native';
import CheckBox from './CheckBox';
import CircleButton from './CircleButton';

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
      <CircleButton>
        <Text>Button Text</Text>
      </CircleButton>

      <CircleButton disabled={true}>
        <Text>Button Text</Text>
      </CircleButton>

      <CircleButton loading={true}>
        <Text>Button Text</Text>
      </CircleButton>
    </View>
  );
}
