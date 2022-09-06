import {TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const Card = () => {
  return <TouchableOpacity style={style.card} />;
};

export default Card;

const style = StyleSheet.create({
  card: {
    width: '30%',
    height: 160,
    backgroundColor: 'white',
    borderRadius: 24,
    marginVertical: 6,
  },
});
