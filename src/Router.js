import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './Page/Home';
import MealList from './Page/MealList';
import Recipe from './Page/Recipe';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Categories"
          component={Home}
          options={{
            title: 'Recipe app',
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTintColor: 'orange',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Meal List"
          component={MealList}
          options={{
            title: 'Meal List',
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTintColor: 'orange',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Recipe"
          component={Recipe}
          options={{
            title: 'Recipe',
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTintColor: 'orange',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
