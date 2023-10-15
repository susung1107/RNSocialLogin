import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

// styles
import styles from './SocialLoginButton.style';

const SocialLoginButton = ({ krTitle, onPress }: any) => {
  return (
    <TouchableOpacity style={[styles.button]} onPress={onPress}>
      <Text style={[styles.buttonText]}>{krTitle}로 로그인</Text>
    </TouchableOpacity>
  );
};

export default SocialLoginButton;
