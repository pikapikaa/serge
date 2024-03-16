import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const icons = [{name: 'home-outline'}, {name: 'bookmark'}, {name: 'account'}];

const MainTabBar = ({state, descriptors, navigation}: BottomTabBarProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const isFocused = state.index === index;

          const iconName = icons[index].name;

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

          return (
            <TouchableOpacity
              key={`${route.key}${index}`}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              style={styles.tabItemContainer}>
              <View
                style={[
                  styles.iconContainer,
                  {
                    backgroundColor: isFocused ? '#84e5a0' : 'transparent',
                  },
                ]}>
                <Icon
                  name={iconName}
                  color={isFocused ? '#04060c' : '#f0f2f8'}
                  size={25}
                />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default MainTabBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#16181d',
    paddingHorizontal: 30,
    paddingBottom: 12,
    alignItems: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#2b2f37',
    borderRadius: 30,
    padding: 10,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    width: 300,
  },
  tabItemContainer: {},
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
