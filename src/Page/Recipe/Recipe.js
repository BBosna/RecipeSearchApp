import React from 'react';
import {
  SafeAreaView,
  Text,
  ScrollView,
  Image,
  Button,
  View,
  Linking,
} from 'react-native';
import Config from 'react-native-config';
import Loading from '../../Components/Loading';
import Error from '../../Components/Error';
import styles from './Recipe.style';
import useFetch from '../../hooks/useFetch';

const Recipe = ({route}) => {
  const {id} = route.params;
  const {data, error, loading} = useFetch(Config.API_MEAL + id);
  const goToYoutube = link => {
    console.log(link);
    Linking.openURL(link);
  };
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }
  return (
    <SafeAreaView style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: data.meals[0].strMealThumb}}
        />
        <View style={styles.body_container}>
          <Text style={styles.title}>{data.meals[0].strMeal}</Text>
          <Text style={styles.area}>{data.meals[0].strArea}</Text>
          <Text style={styles.recipe}>{data.meals[0].strInstructions}</Text>
          <Button
            title="Youtube"
            color={'red'}
            onPress={() => goToYoutube(data.meals[0].strYoutube)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Recipe;
