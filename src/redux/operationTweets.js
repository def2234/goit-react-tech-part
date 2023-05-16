import { createAsyncThunk } from '@reduxjs/toolkit';
// import { GetTweets } from 'usersApi/UsersApi';
import axios from 'axios';

axios.defaults.baseURL = 'https://644427b8466f7c2b4b63094a.mockapi.io';

// export const fetchTweestPage = createAsyncThunk('tweets/fetch', async page => {
//   try {
//     const { data } = await axios.get(`/user?page=${page}&limit=3`);

//     return data;
//   } catch (error) {
//     return Promise.reject(new Error(error));
//   }
// });

export const fetchTweets = createAsyncThunk('tweets/fetchAll', async page => {
  try {
    const { data } = await axios.get(`/user?page=${page}&limit=3`);

    return data;
  } catch (error) {
    return Promise.reject(new Error(error));
  }
});
