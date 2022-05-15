import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { searchParams } from '../utils/const';

export default function useQueries() {
  const {search} = useLocation();
  const params = new URLSearchParams(search);
  const strings = params.get(searchParams.stringCount);
  const types = params.get(searchParams.type);
  const minPrice = params.get(searchParams.minPrice);
  const maxPrice = params.get(searchParams.maxPrice);
  const popular = params.get(searchParams.sort);
  const direction = params.get(searchParams.direction);

  const [filterString, setFilterString] = useState(strings ? `${searchParams.stringCount}=${strings}` : '');
  const [filterType, setFilterType] = useState(types ? `${searchParams.type}=${types}` : '');
  const [filterMinPrice, setFilterMinPrice] = useState(minPrice ? `${searchParams.minPrice}=${minPrice}` : '');
  const [filterMaxPrice, setFilterMaxPrice] = useState(maxPrice ? `${searchParams.maxPrice}=${maxPrice}` : '');
  const [sortPopular, setSortPopular] = useState(popular ? popular : `${searchParams.defaultSort}`);
  const [sortDirection, setDirection] = useState(direction ? direction : `${searchParams.defaultDirection}`);

  const finalRequest = [
    `${searchParams.sort}=${sortPopular}`,
    `${searchParams.direction}=${sortDirection}`,
    `${filterMinPrice}`,
    `${filterMaxPrice}`,
    `${filterString}`,
    `${filterType}`,
  ]
    .filter(Boolean)
    .join('&');

  return {
    finalRequest,
    setFilterString,
    setFilterType,
    setFilterMinPrice,
    setFilterMaxPrice,
    setSortPopular,
    setDirection,
    sortPopular,
    sortDirection,
  };
}
