import { createSlice } from '@reduxjs/toolkit';
import { fetchTweets } from './operationTweets';

const initialState = {
  tweets: [],

  error: null,
};

export const tweetsSlice = createSlice({
  name: 'tweets',
  initialState,

  reducers: {
    addFollow(state, { payload }) {
      state.tweets = payload;
    },
    deleteFollow(state, { payload }) {
      state.tweets = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTweets.fulfilled, (state, { payload }) => {
        state.tweets = [...state.tweets, ...payload];
        state.isLoading = true;
        state.page = +1;
      })
      .addCase(fetchTweets.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchTweets.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
    //   .addCase(fetchTweestPage.fulfilled, (state, { payload }) => {
    //     state.tweets = [...state.tweets, ...payload];
    //   });
  },
});
export const tweetsFollows = tweetsSlice.reducer;
export const { addFollow, deleteFollow } = tweetsSlice.actions;
