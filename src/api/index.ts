import axios from 'axios';
import { baseURL } from '../config/constants/api.constants';

export const api = axios.create({
  baseURL: baseURL,
});
