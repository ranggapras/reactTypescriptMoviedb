import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const getMovies = createAsyncThunk(
  'getMovies',
  async (data, {rejectWithValue}) => {
    return await axios
      .get(
        'https://api.themoviedb.org/3/movie/popular?api_key=bb83bd5cf496014b1bf123c7b88809ad&page=1',
      )
      .then(response => {
        console.log('fullfilled', response.data);

        return response.data;
      })
      .catch(error => {
        if (!error.response) {
          throw error;
        }

        return rejectWithValue(error.response.data);
      });
  },
);
