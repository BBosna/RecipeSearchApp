import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './RecipeCategories.style';

const RecipeCategories = ({category, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image source={{uri: category.strCategoryThumb}} style={styles.image} />
        <Text style={styles.title}>{category.strCategory}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RecipeCategories;
