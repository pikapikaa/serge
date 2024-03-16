import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface BookmarkScreenProps {}

const BookmarkScreen = (props: BookmarkScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>BookmarkScreen</Text>
    </View>
  );
};

export default BookmarkScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#16181d'},
});
