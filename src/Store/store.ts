import {configureStore} from '@reduxjs/toolkit';
import movieSlice from '../Screens/Home/slicer';
import {useSelector, useDispatch, TypedUseSelectorHook} from 'react-redux';

const store = configureStore({
  reducer: {
    movie: movieSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
