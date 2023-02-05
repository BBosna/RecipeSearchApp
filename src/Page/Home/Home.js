import React from 'react';
import {FlatList} from 'react-native';
import Config from 'react-native-config';
import styles from './Home.style';
import Loading from '../../Components/Loading';
import Error from '../../Components/Error';
import useFetch from '../../hooks/useFetch';
import RecipeCategories from '../../Components/RecipeCategories';

const Home = ({navigation}) => {
  const {data, error, loading} = useFetch(Config.API_URL);
  const handleCategorySelect = strCategory => {
    navigation.navigate('Meal List', {strCategory});
  };
  const renderCategory = ({item}) => {
    return (
      <RecipeCategories
        category={item}
        onSelect={() => handleCategorySelect(item.strCategory)}
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
      data={data.categories}
      renderItem={renderCategory}
    />
  );
};

export default Home;
