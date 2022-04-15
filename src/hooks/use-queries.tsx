/* eslint-disable no-console */
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function useQueries() {
  const {pathname} = useLocation();
  // eslint-disable-next-line no-console
  const search = new URLSearchParams(pathname.slice(8));

  const strings = search.get('stringCount');
  const types = search.get('type');
  const minPrice = search.get('price_gte');
  const maxPrice = search.get('price_lte');


  const [filterString, setFilterString] = useState(strings ? `stringCount=${strings}` : '');
  const [filterType, setFilterType] = useState(types ? `type=${types}` : '');
  const [filterMinPrice, setFilterMinPrice] = useState(minPrice ? `price_gte=${minPrice}` : '');
  const [filterMaxPrice, setFilterMaxPrice] = useState(maxPrice ? `price_lte=${maxPrice}` : '');
  const [sortPopular, setSortPopular] = useState('price');
  const [direction, setDirection] = useState('asc');

  const finalRequest = [
    `_sort=${sortPopular}`,
    `_order=${direction}`,
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
    direction,
    filterString,
    filterType,
    filterMinPrice,
    filterMaxPrice,
  };
}
