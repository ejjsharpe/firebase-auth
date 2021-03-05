import {LoginScreen, RegistrationScreen} from '../screens';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

export default function AuthStackNavigator() {
  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name={'Login'}
        options={{headerTitle: ''}}
        component={LoginScreen}
      />
      <AuthStack.Screen name={'Registration'} component={RegistrationScreen} />
    </AuthStack.Navigator>
  );
}
