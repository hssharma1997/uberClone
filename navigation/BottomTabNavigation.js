import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import Service from '../Screens/Service';
import ActivityScreen from '../Screens/Service';
import Account from '../Screens/Account';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';

const BottomTabNavigation = () => {
    const Tab = createMaterialBottomTabNavigator();
  return (
    <Tab.Navigator  
    initialRouteName="Home"
    activeColor="#000000"
    inactiveColor="#a7aba8"
    barStyle={{ backgroundColor: '#fff' }}
    >
    <Tab.Screen 
    name="Home" 
    component={HomeScreen}
    options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home-variant" color={color} size={26} />
        ),
      }}
    
    />
    <Tab.Screen 
    name="Services" 
    component={Service}
    options={{
        tabBarLabel: 'Services',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="dots-grid" color={color} size={26} />
        ),
      }}
       />
    <Tab.Screen 
    name="Activity" 
    component={ActivityScreen}
    options={{
        tabBarLabel: 'Activity',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="bookmark-minus-outline" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen 
    name="Account"
     component={Account}
     options={{
        tabBarLabel: 'Account',
        tabBarIcon: ({ color }) => (
          <FontAwesomeIcons name="user" color={color} size={26} />
        ),
      }}
     />
  </Tab.Navigator>
  )
}

export default BottomTabNavigation

const styles = StyleSheet.create({})