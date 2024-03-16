import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const MainsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hi, Nurgun!</Text>
    </View>
  );
};

export default MainsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16181d',
  },
  text: {color: '#f0f2f8'},
});
