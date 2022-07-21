import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import {moderateScale} from '../styles/responsiveSize';

const TextInputCus = ({
  placeholder,
  label,
  value,
  isSecure,
  onChangeText,
  keyboardType,
  textStyle,
  props,
}) => {
  return (
    <View style={styles.container}>
      <Text style={{marginBottom: 5, color: 'black'}}>{label}</Text>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={isSecure}
        style={{
          ...styles.inputStyle,
          ...textStyle,
        }}
        placeholderTextColor="gray"
        keyboardType={!!keyboardType ? keyboardType : null}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    height: 52,
    borderWidth: 1,
    borderColor: 'gray',
    paddingLeft: moderateScale(15),
  },
});
export default TextInputCus;
