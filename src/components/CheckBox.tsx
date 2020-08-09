import React from 'react';
import {StyleSheet, View, TouchableHighlight, Image, Text} from 'react-native';

type Props = {
  label: string;
  onPress?: () => void;
  checked: boolean;
  disabled?: boolean;
  hideLabel?: boolean;
};

export default function CheckBox(props: Props) {
  let text = <Text style={styles.text}>{props.label}</Text>;

  let box = props.checked ? (
    <View style={[styles.box, styles.filledBox]} />
  ) : (
    <View style={[styles.box, styles.emptyBox]} />
  );

  return (
    <TouchableHighlight
      underlayColor={'transparent'}
      hitSlop={
        props.disabled ? undefined : {top: 10, right: 10, bottom: 10, left: 10}
      }
      onPress={props.onPress}>
      <View style={styles.row}>
        {box}
        {text}
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  box: {
    borderRadius: 5,
    width: 18,
    height: 18,
    marginTop: 6,
    marginRight: 2,
  },
  filledBox: {
    backgroundColor: 'blue',
  },
  emptyBox: {
    backgroundColor: 'transparent',
    borderColor: 'blue',
    borderWidth: 1.6,
  },
  text: {
    marginLeft: 11,
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: 0.94,
  },
});
