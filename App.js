
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//for stack navigator
// import {createStackNavigator} from '@react-navigation/stack';
//for bottom tab navigator
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Theme from './Themes/customBoostrapTheme';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';

import Timeline from "./Screens/Timline";
import Profile from "./Screens/Profile";
import Search from "./Screens/Search";


// const Stack = createStackNavigator();
//init the navigator
const Tab = createBottomTabNavigator();

//build the bottom tab navigator as a functional componet
const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Timeline"
      tabBarOptions={{
        activeTintColor: Theme.color.white,
        activeBackgroundColor: Theme.color.black,
        inactiveBackgroundColor: Theme.color.black,
      }}
    >

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            // <Image
            // style={{width: 30, height: 30}}
            // source={require('./Assets/Icons/icons8-search-30.png')}
            // />
            <Icon name="magnify" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Timeline"
        component={Timeline}
        options={{
          tabBarLabel: 'Timeline',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home-outline" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Icon name="account-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}


//entry funtion to the app

const App = () => {
  return (
    //Render the navigator in navigation container
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({


});

export default App;
