import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store from './store';
import { Provider } from 'react-redux';
import { PAGES } from './pages';

const Stack = createNativeStackNavigator();


export default function App() {


  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName={PAGES.LOGIN}
        >
          <Stack.Screen
            name="Login"
            component={PAGES.LOGIN}
            options={{title: 'Login'}}
          />
          <Stack.Screen
            name="SignUp"
            component={PAGES.SIGN_UP}
            options={{title: 'Sign Up'}}
          />
          <Stack.Screen
            name="Restaurants"
            component={PAGES.RESTAURANTS}
            options={{title: 'Restaurants'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
