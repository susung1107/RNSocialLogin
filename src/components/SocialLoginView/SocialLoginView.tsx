import React, { useState } from 'react';
import { View, Text, Platform, TouchableOpacity } from 'react-native';

// styles
import styles from './SoicalLoginView.style';

// naver
import NaverLogin, {
  NaverLoginResponse,
  GetProfileResponse,
} from '@react-native-seoul/naver-login';

// key
const iosKeys = {
  kConsumerKey: 'naver client id',
  kConsumerSecret: 'naver secret id',
  kServiceAppName: '테스트앱(iOS)',
  kServiceAppUrlScheme: 'naverLogin', // only for iOS
};

const androidKeys = {
  kConsumerKey: 'naver client id',
  kConsumerSecret: 'naver secret id',
  kServiceAppName: '테스트앱(안드로이드)',
};

const initials = Platform.OS === 'ios' ? iosKeys : androidKeys;

const SocialLoginView = () => {
  // state
  const [naverToken, setNaverToken] = React.useState(null);

  // func

  return (
    <View style={[styles.container]}>
      <View style={[styles.title]}>
        <Text style={[styles.titleText]}>소셜 로그인</Text>
      </View>
      <TouchableOpacity style={[styles.button]} onPress={() => naverLogin()}>
        <Text style={[styles.buttonText, styles.naverText]}>
          네이버로 로그인
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SocialLoginView;
