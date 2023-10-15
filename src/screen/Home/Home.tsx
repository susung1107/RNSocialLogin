import React from 'react';
import { View } from 'react-native';

// style
import styles from './Home.style';

// components
import { LoginForm } from '../../components';

const Home = () => {
  return (
    <View style={[styles.container]}>
      <LoginForm />
    </View>
  );
};

export default Home;
