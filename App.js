import React, { Component } from 'react';
import { StatusBar, Platform } from 'react-native';
import { Provider } from 'react-redux';

import Categories from './src/screens/Categories';
import Subcategories from './src/screens/Subcategories';
import Math from './src/screens/Math';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionSpecs, HeaderStyleInterpolators } from '@react-navigation/stack';
import configureStore from './src/store/createStore';

const Stack = createStackNavigator();
const Store = configureStore();

const MyTransition = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: {
      animation: 'spring',
    },
    close: {
      animation: 'spring',
    }
  },
  cardOverlayEnabled: true,
  cardStyleInterpolator: ({ current, next, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
          {
            translateX: next
              ? next.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0 - 80],
              })
              : 1
          },
        ],
      },
      overlayStyle: {
        opacity: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.4],
        }),
      },
    };
  },
}

const ScreenOptions = Platform.OS === 'ios' 
  ? {headerShown: false, gestureEnabled: true} 
  : {headerShown: false, ...MyTransition};

class App extends Component {
  render() {  
    return (
      <Provider store={Store}>
        <StatusBar backgroundColor="#339cdd"/>

        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              options={ScreenOptions}
              name="Categories"
              component={Categories}
            />

            <Stack.Screen
              options={ScreenOptions}
              name="Subcategories"
              component={Subcategories}
            />

            <Stack.Screen
              options={ScreenOptions}
              name="Math"
              component={Math}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;