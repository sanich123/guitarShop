import { useState } from 'react';
import { Guitar } from '../types/types';


export function usePagination(guitarsList: Guitar[]) {
  const [pageNumber, setPageNumber] = useState(1);
  const cardsOnPage = 3;
  const endSlicing = pageNumber * cardsOnPage;
  const beginSlicing = endSlicing - cardsOnPage;
  const guitars = guitarsList?.slice(beginSlicing, endSlicing);
  return {guitars, setPageNumber, pageNumber, cardsOnPage};
}
