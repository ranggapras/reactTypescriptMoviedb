import {TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';

const Card = ({item}) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image
        source={{uri: `https://image.tmdb.org/t/p/w780${item.poster_path}`}}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    // width: '30%',
    // height: 160,
    // // backgroundColor: 'white',
    // borderRadius: 24,
    // marginVertical: 6,
  },
  image: {
    width: 120,
    height: 160,
    borderRadius: 24,
    marginVertical: 6,
    marginLeft: 6,
  },
});
