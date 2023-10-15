import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

// screen
import { Home } from './src/screen';

// components
import { Header } from './src/components';

const App = () => {
  return (
    <>
      <SafeAreaView />
      <View style={[styles.container]}>
        <Header />
        <Home />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
