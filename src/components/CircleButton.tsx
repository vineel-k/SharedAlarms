import React from 'react';
import {
  StyleSheet,
  StyleProp,
  ViewStyle,
  ActivityIndicator,
  Text,
} from 'react-native';
import Touchable, {
  PlatformTouchableProps,
} from 'react-native-platform-touchable';

type Props = PlatformTouchableProps & {
  children?: string | React.ReactNode;
  disabled?: boolean;

  style?: StyleProp<ViewStyle>;
};

export default function CircleButton(props: Props) {
  var children = props.children;
  if (children as string) {
    children = (
      <Text style={props.disabled && styles.disabledText}>
        {props.children}
      </Text>
    );
  }
  const disabled = props.disabled ?? false;
  return (
    <Touchable
      {...props}
      disabled={disabled}
      style={[styles.button, props.disabled && styles.disabled, props.style]}>
      {children}
    </Touchable>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'cyan',
    borderColor: 'blue',
  },
  disabled: {
    borderColor: 'grey',
  },
  disabledText: {
    color: 'grey',
  },
});
