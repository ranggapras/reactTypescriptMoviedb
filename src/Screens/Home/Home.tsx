import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React, {useEffect} from 'react';
import Search from '../../Components/Search/Search';
import Card from '../../Components/Card/Card';
import BookmarkFill from '../../Assets/bookmarkGreenFill.svg';
import {getMovies} from './action';
import {useAppDispatch, useAppSelector} from '../../Store/store';

const Home = ({navigation}) => {
  const {movie} = useAppSelector(state => state.movie);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <View style={{height: '100%'}}>
      <Search />
      <FlatList
        data={movie}
        renderItem={Card}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.container}
        numColumns={3}
      />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Watchlist')}>
        <Text style={styles.text}>Watch List</Text>
        <BookmarkFill />
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingHorizontal: 6,
    paddingTop: 16,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#4FCCA3',
    paddingHorizontal: 18,
    width: 160,
    height: 50,
    borderRadius: 18,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  text: {
    fontSize: 18,
    color: '#242A32',
    fontWeight: 'bold',
  },
});
