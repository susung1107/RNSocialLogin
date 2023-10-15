import React from 'react';
import { View } from 'react-native';

// style
import styles from './Home.style';

// components
import { LoginForm, SocialLoginView } from '../../components';

const Home = () => {
  return (
    <View style={[styles.container]}>
      <LoginForm />
      <View style={[styles.divideLine]} />
      <SocialLoginView />
    </View>
  );
};

export default Home;
