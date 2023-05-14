import axios from 'axios';

axios.defaults.baseURL = 'https://644427b8466f7c2b4b63094a.mockapi.io';

export const GetUsers = async page => {
  try {
    const res = await axios.get(`/user?page=${page}&limit=3`);

    return res;
  } catch (error) {
    return Promise.reject(new Error(error));
  }
};
