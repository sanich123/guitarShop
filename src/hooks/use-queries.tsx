/* eslint-disable no-console */
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function useQueries() {
  const {pathname} = useLocation();
  const search = new URLSearchParams(pathname.slice(8));

  const strings = search.get('stringCount');
  const types = search.get('type');
  const minPrice = search.get('price_gte');
  const maxPrice = search.get('price_lte');
  const popular = search.get('_sort');
  const direction = search.get('_order');

  const [filterString, setFilterString] = useState(strings ? `stringCount=${strings}` : '');
  const [filterType, setFilterType] = useState(types ? `type=${types}` : '');
  const [filterMinPrice, setFilterMinPrice] = useState(minPrice ? `price_gte=${minPrice}` : '');
  const [filterMaxPrice, setFilterMaxPrice] = useState(maxPrice ? `price_lte=${maxPrice}` : '');
  const [sortPopular, setSortPopular] = useState(popular ? popular : 'price');
  const [sortDirection, setDirection] = useState(direction ? direction : 'asc');

  const finalRequest = [
    `_sort=${sortPopular}`,
    `_order=${sortDirection}`,
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
    filterString,
    filterType,
    filterMinPrice,
    filterMaxPrice,
  };
}
