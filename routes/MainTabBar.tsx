import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const MainTabBar = ({state, descriptors, navigation}: BottomTabBarProps) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={`${route.key}${index}`}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabContainer}>
            {typeof label === 'string' ? (
              <Text style={{color: isFocused ? '#673ab7' : '#222'}}>
                {label}
              </Text>
            ) : typeof label === 'function' ? (
              <>{label}</>
            ) : null}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default MainTabBar;

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  tabContainer: {flex: 1},
});
