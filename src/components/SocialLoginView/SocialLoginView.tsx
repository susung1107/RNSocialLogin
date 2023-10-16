import React, { useState } from 'react';
import { View, Text, Platform, TouchableOpacity } from 'react-native';

// styles
import styles from './SoicalLoginView.style';

// utils
import { iosKeys, androidKeys } from '../../utils';

// naver
import NaverLogin, {
  NaverLoginResponse,
  GetProfileResponse,
} from '@react-native-seoul/naver-login';

const initials = Platform.OS === 'ios' ? iosKeys : androidKeys;

const SocialLoginView = () => {
  // state
  const [naverToken, setNaverToken] = useState(null);

  // func
  const naverLogin = (keys: any) => {
    console.log(keys);
  };

  return (
    <View style={[styles.container]}>
      <View style={[styles.title]}>
        <Text style={[styles.titleText]}>소셜 로그인</Text>
      </View>
      <TouchableOpacity
        style={[styles.button]}
        onPress={() => naverLogin(initials)}
      >
        <Text style={[styles.buttonText, styles.naverText]}>
          네이버로 로그인
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SocialLoginView;
