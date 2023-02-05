import React from 'react';
import {FlatList} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import Meals from '../../Components/Meals';
import Loading from '../../Components/Loading';
import Error from '../../Components/Error';
import styles from './MealList.style';

const MealList = ({route, navigation}) => {
  const {strCategory} = route.params;
  const {data, error, loading} = useFetch(
    Config.API_CATEGORY_SEARCH + strCategory,
  );
  const handleCategorySelect = id => {
    navigation.navigate('Recipe', {id});
  };

  const renderMealList = ({item}) => {
    return (
      <Meals
        mealList={item}
        onSelect={() => handleCategorySelect(item.idMeal)}
      />
    );
  };
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }
  return (
    <FlatList
      style={styles.container}
      data={data.meals}
      renderItem={renderMealList}
    />
  );
};

export default MealList;
