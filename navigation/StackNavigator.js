import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const tab = createBottomTabNavigator();
  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="chats" component={ChatScreen} options={{
          tabBarStyle: { backgroundColor: "#101010" },
          headerShown: false,
          tabBarIcon: ({ focused }) => focused ? (<MaterialIcons name="chat-bubble-outline" size={30} color="white" />) : (<MaterialIcons name="chat-bubble-outline" size={30} color="white" />)
        }} />

        <Tab.Screen name="profile" component={ProfileScreen} options={{
          tabBarStyle: { backgroundColor: "#101010" },
          headerShown: false,
          tabBarIcon: ({ focused }) => focused ? (<Ionicons name="person-outline" size={30} color="white" />) : (<Ionicons name="person-outline" size={30} color="white" />)
        }} />
      </Tab.Navigator>
    )
  }

  const AuthStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} /> 
      </Stack.Navigator>
    );
  };
  
  return (

    <View>
      <Text>StackNavigator</Text>
    </View>
  )
  }



export default StackNavigator

const styles = StyleSheet.create({})