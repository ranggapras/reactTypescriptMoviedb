import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Card from '../../Components/Card/Card';
import BackArrow from '../../Assets/arrow.svg';
import Bookmarked from '../../Assets/bookmarked.svg';
import Notbookmarked from '../../Assets/notBookmarked.svg';

const DetailsMovie = ({navigation}) => {
  const [bookmark, setBookmark] = useState(true);
  const handleBookmark = () => {
    setBookmark(!bookmark);
  };
  return (
    <View style={styles.container}>
      <View style={styles.bannerMovie}></View>
      <View style={styles.titleContainer}>
        <Card />
        <Text style={[styles.title, styles.titleMovie]}>
          Spiderman No Way Home
        </Text>
      </View>
      <View style={styles.aboutCountainer}>
        <Text style={[styles.title, styles.titleAbout]}>About Movie</Text>
        <View>
          <Text style={styles.title}>Overviews :</Text>
          <Text style={styles.description}>
            From DC Comics comes the Suicide Squad, an antihero team of
            incarcerated supervillains who act as deniable assets for the United
            States government, undertaking high-risk black ops missions in
            exchange for commuted prison sentences.
          </Text>
          <Text style={styles.title}>Release Date :</Text>
          <Text style={styles.description}>2019-08-03</Text>
          <View style={styles.ratingContainer}>
            <View>
              <Text style={styles.title}>Average Rating:</Text>
              <Text style={styles.description}>9.2</Text>
            </View>
            <View style={styles.ratecountContainer}>
              <Text style={styles.title}>Rate Count:</Text>
              <Text style={styles.description}>1466</Text>
            </View>
          </View>
          <Text style={styles.title}>Popularity:</Text>
          <Text style={styles.description}>48.261451</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.goBack()}>
        <BackArrow />
        <Text style={styles.text}>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.buttonBookmark,
          !bookmark ? styles.buttonBookmark : styles.buttonBookmarked,
        ]}
        onPress={() => handleBookmark()}>
        {!bookmark ? <Bookmarked /> : <Notbookmarked />}
      </TouchableOpacity>
    </View>
  );
};

export default DetailsMovie;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 24,
    alignItems: 'flex-end',
    position: 'absolute',
    top: 130,
  },
  ratingContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    color: '#EEEEEE',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
  description: {
    color: '#EEEEEE',
    lineHeight: 20,
    marginBottom: 10,
  },
  titleMovie: {
    fontSize: 24,
    display: 'flex',
    flexShrink: 1,
    marginLeft: 12,
  },
  aboutCountainer: {
    display: 'flex',
    padding: 24,
    marginTop: 100,
  },
  titleAbout: {
    fontSize: 20,
    borderBottomColor: '#3A3F47',
    borderBottomWidth: 4,
    width: 120,
    paddingBottom: 12,
    marginBottom: 12,
  },
  overviewContainer: {
    display: 'flex',
  },
  ratecountContainer: {
    marginLeft: 64,
  },
  bannerMovie: {
    height: 200,
    width: '100%',
    backgroundColor: 'red',
  },
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
    bottom: 10,
    left: 10,
  },
  buttonBookmark: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#4FCCA3',
    paddingTop: 12,
    width: 50,
    height: 50,
    borderRadius: 18,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  buttonBookmarked: {
    backgroundColor: '#3A3F47',
  },
});
