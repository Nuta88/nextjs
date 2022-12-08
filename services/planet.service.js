import getConfig from 'next/config';

import { fetchWrapper } from '../api/fetchWrapper';
import { apiUrls } from '../constatnts/api';
const { publicRuntimeConfig } = getConfig();

const baseUrl = `${publicRuntimeConfig.apiUrl}${apiUrls.planets}`;

const fetchPlanets = async ({ queryKey }) => {
  const { page, search } = queryKey[1];
  const queryParams = search ? `?page=${page}&search=${search}` : `?page=${page}`;

  return fetchWrapper.get(`${baseUrl}${queryParams}`);
};


export const planetService = {
  fetchPlanets
};
