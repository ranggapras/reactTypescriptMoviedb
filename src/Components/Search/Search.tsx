import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const Search = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search Here ..."
        style={styles.input}
        placeholderTextColor="#EEEEEE"
      />
      <TouchableOpacity style={styles.button}>
        <FontAwesome name="search" size={20} color="#EEEEEE" />
      </TouchableOpacity>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 10,
    height: 80,
  },
  input: {
    color: '#EEEEEE',
    backgroundColor: '#3A3F47',
    width: 256,
    marginVertical: 6,
    borderRadius: 16,
    padding: 16,
  },
  button: {
    display: 'flex',
    marginVertical: 6,
    backgroundColor: '#3A3F47',
    padding: 12,
    borderRadius: 16,
    width: 48,
  },
});
