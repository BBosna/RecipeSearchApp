import React from 'react';
import {ImageBackground, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './Meals.style';

const meals = ({mealList, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <ImageBackground
        source={{uri: mealList.strMealThumb}}
        style={styles.container}>
        <Text numberOfLines={1} style={styles.text}>
          {mealList.strMeal}
        </Text>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};
export default meals;
