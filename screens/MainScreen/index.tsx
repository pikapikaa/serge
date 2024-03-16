import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const MainsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.left}>
          <Text style={styles.text}>Hi, Nurgun!</Text>
          <View>
            <Text style={styles.subtitle}>Native language: Saha</Text>
            <Text style={styles.subtitle}>Mongol level: A1</Text>
          </View>
        </View>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{
            uri: 'https://musicaecinema.com/wp-content/uploads/2024/02/Timothee-Chalamet-duna-2.jpg',
          }}
        />
      </View>

      <View style={styles.wordDayContainer}>
        <Text style={styles.text}>Words of the day</Text>
        <View style={styles.noteContainer}>
          <Text style={styles.text1}>баярлалаа</Text>
        </View>
        <View style={styles.noteContainer}>
          <Text style={styles.text1}>сэдьхэл</Text>
        </View>
        <View style={styles.noteContainer}>
          <Text style={styles.text1}>эрхэ</Text>
        </View>
      </View>
    </View>
  );
};

export default MainsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16181d',
    padding: 16,
    gap: 30,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingEnd: 10,
  },
  wordDayContainer: {gap: 10},
  noteContainer: {
    backgroundColor: '#2b2f37',
    borderRadius: 16,
    padding: 5,
    paddingVertical: 7,
  },
  left: {gap: 10},
  text: {color: '#f0f2f8', fontFamily: 'Rubik-Regular', fontSize: 30},
  text1: {color: '#f0f2f8', fontFamily: 'Rubik-Regular', fontSize: 16},
  subtitle: {
    color: '#5c5e64',
    fontFamily: 'Rubik-Regular',
    lineHeight: 18,
    fontSize: 15,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 70 / 2,
  },
});
