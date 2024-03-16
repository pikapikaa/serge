import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import MainScreen from './screens/MainScreen';
import MainTabBar from './routes/MainTabBar';
import ProfileScreen from './screens/ProfileScreen';
import BookmarkScreen from './screens/BookmarkScreen';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  const tabBar = (props: BottomTabBarProps) => <MainTabBar {...props} />;

  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={tabBar}>
        <Tab.Screen
          name="Home"
          component={MainScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Bookmark"
          component={BookmarkScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
