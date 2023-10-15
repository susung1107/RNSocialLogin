import React from 'react';
import { View, Text } from 'react-native';

// styles
import styles from './Header.style';

const Header = () => {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.title]}>로그인</Text>
    </View>
  );
};

export default Header;
