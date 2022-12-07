import getConfig from 'next/config';

import { fetchWrapper } from '../api/fetchWrapper';
import { apiUrls } from '../constatnts/api';
const { publicRuntimeConfig } = getConfig();

const url = `${publicRuntimeConfig.apiUrl}${apiUrls.planets}`;

const fetchPlanets = async () => {
  return fetchWrapper.get(url);
};


export const planetService = {
  fetchPlanets
};
