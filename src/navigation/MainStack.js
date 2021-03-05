import {HomeScreen} from '../screens';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

const MainStack = createStackNavigator();

export default function MainStackNavigator() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={HomeScreen} />
    </MainStack.Navigator>
  );
}
