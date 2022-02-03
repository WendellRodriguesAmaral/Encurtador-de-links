//minha chave

// c99888eebabbec748f29231a896c8b8b9258c10a

import axios from 'axios';

export const key = "c99888eebabbec748f29231a896c8b8b9258c10a";

const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4',
  headers: {
    'Authorization': `Bearer ${key}`,
  },
});

export default api;
