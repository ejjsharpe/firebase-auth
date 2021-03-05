import React, {useState, useEffect} from 'react';
import {firebase} from './src/firebase/config';
import {SafeAreaView, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import {AuthStackNavigator, MainStackNavigator} from './src/navigation/';

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const usersRef = firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data();
            setLoading(false);
            setUser(userData);
          })
          .catch((error) => {
            setLoading(false);
          });
      } else {
        setLoading(false);
      }
    });
  }, []);

  const RootStack = createStackNavigator();

  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {user ? (
          <RootStack.Screen
            name="MainStack"
            component={MainStackNavigator}></RootStack.Screen>
        ) : (
          <>
            <RootStack.Screen name="AuthStack" component={AuthStackNavigator} />
          </>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
