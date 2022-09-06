import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import Search from '../../Components/Search/Search';
import Card from '../../Components/Card/Card';
import MovieCard from '../../Components/MovieCard/MovieCard';

const Home = () => {
  return (
    <View>
      <Search />
      {/* <ScrollView contentContainerStyle={styles.container}>
        <Card />
        <Card />
        <Card />
      </ScrollView> */}
      <MovieCard />
      <MovieCard />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 6,
    paddingTop: 16,
  },
});
