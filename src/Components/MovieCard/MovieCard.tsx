import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Card from '../Card/Card';
import Bookmark from '../../Assets/bookmarkFill.svg';

const MovieCard = () => {
  return (
    <View style={styles.container}>
      <Card />
      <View style={styles.containerDescription}>
        <View>
          <Text style={styles.title}>Title:</Text>
          <Text style={styles.description}>Ipsum</Text>
        </View>
        <View>
          <Text style={styles.title}>Release Date:</Text>
          <Text style={styles.description}>Shilit</Text>
        </View>
        <View>
          <Text style={styles.title}>Avarage Rating:</Text>
          <Text style={styles.description}>Bosku</Text>
        </View>
      </View>
      <View style={styles.containerBook}>
        <Bookmark />
        <TouchableOpacity>
          <Text style={styles.readmore}>Read More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  title: {
    color: '#EEEEEE',
    fontWeight: 'bold',
  },
  description: {
    color: '#EEEEEE',
  },
  readmore: {
    color: '#4FCCA3',
  },
  containerBook: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 150,
    paddingRight: 12,
  },
  containerDescription: {
    display: 'flex',
    justifyContent: 'space-between',
    height: 125,
    width: '48%',
    marginLeft: 12,
  },
});
