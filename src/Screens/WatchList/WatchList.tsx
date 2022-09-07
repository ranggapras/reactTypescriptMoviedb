import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import MovieCard from '../../Components/MovieCard/MovieCard';
import Search from '../../Components/Search/Search';
import BackArrow from '../../Assets/arrow.svg';
const WatchList = ({navigation}) => {
  return (
    <View style={{height: '100%'}}>
      <Search />
      <ScrollView>
        <MovieCard navigation={navigation} />
        <MovieCard navigation={navigation} />
      </ScrollView>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.goBack()}>
        <BackArrow />
        <Text style={styles.text}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WatchList;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: '#EEEEEE',
    fontWeight: 'bold',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#3A3F47',
    paddingHorizontal: 20,
    width: 120,
    height: 50,
    borderRadius: 18,
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
});
