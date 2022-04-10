import { useState } from 'react';

export default function useQueries() {
  const [filterString, setFilterString] = useState('');
  const [filterType, setFilterType] = useState('');
  const [filterMinPrice, setFilterMinPrice] = useState('');
  const [filterMaxPrice, setFilterMaxPrice] = useState('');
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
  };
}
