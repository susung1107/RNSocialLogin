import React from 'react';
import { View, TextInput } from 'react-native';

// styles
import styles from './LoginForm.style';

const LoginForm = () => {
  return (
    <View style={[styles.container]}>
      <TextInput
        style={[styles.textInputUnionStyle]}
        placeholder="아이디"
        placeholderTextColor="#c8c8c8"
        autoCapitalize="none"
      />
      <TextInput
        style={[styles.textInputUnionStyle]}
        placeholder="비밀번호"
        placeholderTextColor="#c8c8c8"
        autoCapitalize="none"
      />
    </View>
  );
};

export default LoginForm;
