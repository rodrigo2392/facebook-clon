import apiClient from './api';

export const getPosts = async () => {
  const res = await apiClient.get('/post?limit=10');
  return res.data;
};
