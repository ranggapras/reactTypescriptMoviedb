import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getMovies = createAsyncThunk(
  'getMovies',
  async (data, {rejectWithValue}) => {
    return await axios
      .get(
        'https://api.themoviedb.org/3/movie/popular?api_key=cea114821ca63be1bd87887a0c4b28b8&page=1',
      )
      .then(response => {
        console.log('fullfilled', response.data);

        return response.data;
      })
      .catch(error => {
        if (!error.response) {
          console.log('error');

          throw error;
        }
        console.log(error);

        return rejectWithValue(error.response.data);
      });
  },
);
