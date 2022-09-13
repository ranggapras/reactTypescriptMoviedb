import {createSlice} from '@reduxjs/toolkit';
import {getMovies} from './action';

const initialState = {
  movie: [],
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getMovies.pending, (state, action) => {
      console.log('pending');
    });
    builder.addCase(getMovies.fulfilled, (state, action) => {
      return {
        ...state,
        movie: action.payload,
      };
    });
    builder.addCase(getMovies.rejected, (state, action) => {
      console.log(action.payload);
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = movieSlice.actions;

export default movieSlice.reducer;
