import axios from 'axios';
import { API_URL } from './api.config';

export const axiosAPI = axios.create({
  baseURL: API_URL,
  headers: {
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS, HEAD',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
    'Access-Control-Allow-Origin': API_URL,
    'Content-Type': 'application/json; charset=utf-8'
  }
});

delete axiosAPI.defaults.headers.common['Authorization'];