import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.github.com/',
});

export const getProfile = (body: any) => {
  return api.get(`users/${body.username}`);
};
