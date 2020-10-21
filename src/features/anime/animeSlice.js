import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAnimeList = createAsyncThunk(
  'v3/top/anime/1/airing',
  async () => {
    const response = await axios.get(
      'https://api.jikan.moe/v3/top/anime/1/bypopularity'
    );
    return response.data.top;
  }
);
export const fetchAnimeTrailer = createAsyncThunk(
  'v3/top/anime/id',
  async (id) => {
    const response = await axios.get(`https://api.jikan.moe/v3/anime/${id}`);
    return response.data.trailer_url;
  }
);

export const animeSlice = createSlice({
  name: 'anime',
  initialState: {
    animeList: [],
    status: null,
    error: null,
    animeTrailers: [],
  },
  reducers: {},
  extraReducers: {
    [fetchAnimeList.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchAnimeList.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.animeList = action.payload;
    },
    [fetchAnimeList.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [fetchAnimeTrailer.fulfilled]: (state, action) => {
      state.animeTrailer = action.payload;
    },
  },
});

export const {} = animeSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectAnimeList = (state) => state.anime.animeList;

export default animeSlice.reducer;
