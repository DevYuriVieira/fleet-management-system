import axios from 'axios';

const api = axios.create({
  baseURL: 'por a APi que vamos usar',
  timeout: 10000,
});

export default api;