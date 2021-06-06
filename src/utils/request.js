import axios from 'axios';

import store from '@/store';

const service = axios.create({
  //  请求地址前面加baseUrl
   baseURL:import.meta.env.VITE_BASE_API,
   timeout:5000
})