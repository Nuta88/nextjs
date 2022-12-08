import { useQuery } from 'react-query';
import { useState, useCallback } from 'react';
import { planetService } from '../services';
import { useDebounce } from './useDebounce';

export const useFetchPlanets = () => {
  const { fetchPlanets } = planetService;
  const [ page, setPage ] = useState(1);
  const [ search, setSearch ] = useState('');
  const [ planetName, setPlanetName ] = useState('');
  const { status, data = {}, error } = useQuery(
    ['planets', { page, search }],
    fetchPlanets,
    { keepPreviousData: true }
  );

  const onSetSearchValue = useCallback(() => {
    if ( search !== planetName ) {
      setPage(1);
      setSearch(planetName);
    }
  }, [planetName, search, setPage, setSearch]);

  useDebounce(onSetSearchValue, [planetName, onSetSearchValue]);

  const onChangePage = useCallback((page) => {
    setPage(page);
  }, []);

  const onSearch = useCallback((value) => {
    setPlanetName(value);
  }, []);

  return {
    planets: data.results || [],
    count: data.count || 0,
    status,
    error,
    onSearch,
    onChangePage
  }
};
