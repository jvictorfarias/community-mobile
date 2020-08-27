import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cryptic-brook-95865.herokuapp.com',
});

export default api;
