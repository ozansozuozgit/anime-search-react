import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import jikanjs from 'jikanjs';

export const fetchAnimeList = createAsyncThunk('/anime/1/airing', async () => {
  const response = await jikanjs.loadTop('anime', 1, 'bypopularity');
  return response.top;
});
export const fetchAnime = createAsyncThunk('/anime/{id}', async (id) => {
  const response = await jikanjs.loadAnime(id);
  return response;
});

export const fetchSearchList = createAsyncThunk(
  '/anime/search/q=',
  async (query) => {
    const response = await jikanjs.search('anime', query, 1);
    return response.results;
  }
);

export const animeSlice = createSlice({
  name: 'anime',
  initialState: {
    anime: null,
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
    [fetchAnime.fulfilled]: (state, action) => {
      state.anime = action.payload;
    },
    [fetchSearchList.fulfilled]: (state, action) => {
      state.animeList = action.payload;
    },
  },
});

export const {} = animeSlice.actions;

export const selectAnimeList = (state) => state.anime.animeList;
export const selectAnime = (state) => state.anime.anime;

export default animeSlice.reducer;
