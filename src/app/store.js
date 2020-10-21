import { configureStore } from '@reduxjs/toolkit';
import animeReducer from '../features/anime/animeSlice';

export default configureStore({
  reducer: {
    anime: animeReducer,
  },
});
